import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../global/colors';
import IconA from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import { style } from './style';
import { notification } from '../../@types/interfaces';

interface Props {
    close: Function;
    item: notification;
}


export const NotificationModal: React.FC<Props> = ({ close, item }) => {
    return (
        <View style={style.backgroundContainer}>
            <View style={style.container}>
                <View style={style.topBar}>
                    <TouchableOpacity onPress={() => close()}>
                        <IconA name="chevron-small-left" size={56} color={colors.darkBackground} />
                    </TouchableOpacity>
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
                                    <IconI name="calendar-clear-outline" size={32} color={colors.green} style={style.icon} />
                                    :
                                    null
                    }
                </View>
                <View style={style.tittleContainer}>
                    <Text style={style.tittle}>{item.notifications_title}</Text>
                </View>
                <View style={style.messageContainer}>
                    <Text style={style.message}>{item.notifications_text}</Text>
                </View>
                <TouchableOpacity style={style.button} onPress={() => close()}>
                    <Text style={style.buttonText}>Lida</Text>
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={'#352700'} />
        </View>
    );
};

