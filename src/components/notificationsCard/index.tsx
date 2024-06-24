import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../global/colors';
import IconE from 'react-native-vector-icons/Entypo';
import { style } from './style';
import { notification } from '../../@types/interfaces';

interface Props {
    onPress: Function;
    item: notification;
}

export const NotificationsCard: React.FC<Props> = ({ onPress, item }) => {
    return (
        <TouchableOpacity style={style.container} onPress={() => onPress()}>
            <View style={style.containerIcon}>
                {item.notifications_type === 1 ?
                    <Image
                        source={require('../../assets/img/notificationtype-promo-icon.png')}
                    />
                    :
                    item.notifications_type === 2 ?
                        <Image
                            source={require('../../assets/img/notificationtype-icon.png')}
                        />
                        :
                        item.notifications_type === 3 ?
                            <Image
                                source={require('../../assets/img/notificationtype-shopping-icon.png')}
                            />
                            :
                            <View style={style.nullIcon}></View>
                }
            </View>
            <View style={style.textContainer}>
                <View>
                    <Text style={style.tittle} numberOfLines={1}>{item.notifications_title}</Text>
                    <Text style={style.message} numberOfLines={2}>{item.notifications_text}</Text>
                </View>
                <TouchableOpacity onPress={() => onPress}>
                    <IconE name="chevron-small-right" size={28} color={colors.titleTextColor} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
