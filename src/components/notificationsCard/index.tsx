import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../global/colors';
import IconA from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import { style } from './style';
import { notification } from '../../@types/interfaces';

interface Props {
    onPress: Function;
    item: notification;
}

export const NotificationsCard: React.FC<Props> = ({ onPress, item }) => {
    return (
        <TouchableOpacity style={style.container} onPress={() => onPress()}>
            <View style={style.left}>
                <Text style={style.tittle} numberOfLines={1}>{item.notifications_title}</Text>
                <Text style={style.message} numberOfLines={2}>{item.notifications_text}</Text>
            </View>
            <View style={style.right}>
                {
                    item.notifications_type === 1
                        ?
                        <IconA name="message" size={35} color={colors.thirdColor} style={style.icon} />
                        :
                        item.notifications_type === 2
                            ?
                            <IconM name="hand-coin-outline" size={35} color={colors.primary} style={style.icon} />
                            :
                            item.notifications_type === 3
                                ?
                                <IconI name="calendar-clear-outline" size={32} color={colors.goodGraph} style={style.icon} />
                                :
                                null
                }
            </View>
        </TouchableOpacity>
    );
};

