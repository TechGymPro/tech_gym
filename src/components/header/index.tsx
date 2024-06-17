/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { useAppSelector } from '../../hooks/hooks';
import { notification } from '../../redux/userSlice';
import { isLoading } from '../../redux/authSlice';
import { isLoading as isLoadingUser } from '../../redux/authSlice';

interface Props {
    backButton?: boolean;
    customBackButton?: Function;
    text?: string;
    hasNotificationIcon?: boolean;
    returnLogoff?: boolean;
    training?: boolean;
}

export const Header: React.FC<Props> = ({ backButton, customBackButton, text, returnLogoff, hasNotificationIcon, training }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const notifications = useAppSelector(notification);
    const loadingAuth = useAppSelector(isLoading);
    const loadingUser = useAppSelector(isLoadingUser);

    return (
        <View style={[hasNotificationIcon ? [style.container, style.containerJustifyContent] : training ? [style.container, style.darkTheme] : style.container]}>
            {backButton && (
                <TouchableOpacity disabled={loadingAuth || loadingUser} onPress={() => customBackButton ? customBackButton() : navigation.goBack()}>
                    <Image source={
                        training ?
                            require('../../assets/img/back-icon-white.png') :
                            require('../../assets/img/back-icon.png')}
                        style={style.ico}
                    />
                </TouchableOpacity>
            )}
            {text && (
                <Text style={
                    training ? [style.hello, style.whiteHello] :
                        style.hello}>{text}</Text>
            )}
            {hasNotificationIcon && (
                <TouchableOpacity
                    disabled={loadingAuth || loadingUser}
                    style={[backButton ? [null] : style.containerIco]}
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Image source={notifications && notifications.length
                        ?
                        require('../../assets/img/notificationActive-ico.png')
                        :
                        require('../../assets/img/notification-ico.png')} style={notifications && notifications.length ? style.icoActive : style.ico} />
                </TouchableOpacity>
            )}
        </View>
    );
};


