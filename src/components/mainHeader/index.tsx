/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import colors from '../../global/colors';
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { useAppSelector } from '../../hooks/hooks';
import { userData } from '../../redux/authSlice';
import { notification } from '../../redux/userSlice';

interface Props {
    customBackButton?: Function;
    disableNotification?: boolean;
    returnLogoff?: boolean;
}

export const MainHeader: React.FC<Props> = ({ customBackButton, disableNotification, returnLogoff }) => {
    const userInfos = useAppSelector(userData);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const notifications = useAppSelector(notification);


    useEffect(() => {
        console.log({ userInfos, line: 24 });
    }, []);

    useEffect(() => {
        console.log({ userInfos, line: 28 });
    }, [userInfos]);

    return (
        <View style={style.container}>
            {returnLogoff
                ?
                <TouchableOpacity onPress={() => customBackButton ? customBackButton() : navigation.goBack()}>
                    <IconM name="power" size={34} color={colors.darkBackground} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => customBackButton ? customBackButton() : navigation.goBack()}>
                    <IconE name="chevron-small-left" size={44} color={colors.darkBackground} />
                </TouchableOpacity>
            }
            <Text style={style.hello}>Olá, {userInfos ? userInfos.student_name.split(' ')[0] : 'User'}</Text>
            {!disableNotification
                ?
                <TouchableOpacity onPress={() => disableNotification ? null : navigation.navigate('Notifications')}>
                    <Image source={notifications && notifications.length ? require('../../assets/img/notificationActive-ico.png') : require('../../assets/img/notification-ico.png')} style={style.ico} />
                </TouchableOpacity>
                :
                <View style={style.ico} />}
        </View>
    );
};


