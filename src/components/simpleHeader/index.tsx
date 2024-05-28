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
    text?: string;
}

export const SimpleHeader: React.FC<Props> = ({ text }) => {
    const userInfos = useAppSelector(userData);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const notifications = useAppSelector(notification);




    useEffect(() => { }, []);

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/img/back-icon.png')} style={style.ico} />
            </TouchableOpacity>
            {text ? (
                <Text style={style.hello}>{text}</Text>
            ) : null}

        </View>
    );
};


