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
    backButton?: boolean;
    customBackButton?: Function;
    text?: string;
    hasNotificationIcon?: boolean;
    returnLogoff?: boolean;
}

export const Header: React.FC<Props> = ({ backButton, customBackButton, text, returnLogoff, hasNotificationIcon }) => {
    const userInfos = useAppSelector(userData);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const notifications = useAppSelector(notification);

    useEffect(() => {
        console.log({ userInfos, line: 28 });
    }, [userInfos]);

    return (
        <View style={[hasNotificationIcon ? [style.container, style.containerJustifyContent] : style.container]}>
            {backButton && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/img/back-icon.png')} style={style.ico} />
                </TouchableOpacity>
            )}

            {text && (
                <Text style={style.hello}>{text}</Text>
            )}

            {hasNotificationIcon && (
                <TouchableOpacity
                    style={[backButton ? [null] : style.containerIco]}
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Image source={notifications && notifications.length
                        ?
                        require('../../assets/img/notificationActive-ico.png')
                        :
                        require('../../assets/img/notification-ico.png')} style={style.ico} />
                </TouchableOpacity>
            )}


        </View>
    );
};


