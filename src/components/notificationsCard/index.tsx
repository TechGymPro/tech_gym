import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../global/colors';
import IconA from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';

interface Props {
    onPress: Function;
    item: { type: number, tittle: string, message: string, id: number };
}

export const NotificationsCard: React.FC<Props> = ({ onPress, item }) => {
    return (
        <TouchableOpacity style={style.container} onPress={() => onPress()}>
            <View style={style.left}>
                <Text style={style.tittle} numberOfLines={1}>{item.tittle}</Text>
                <Text style={style.message} numberOfLines={2}>{item.message}</Text>
            </View>
            <View style={style.right}>
                {
                    item.type === 1
                        ?
                        <IconA name="message" size={35} color={colors.thirdColor} style={style.icon} />
                        :
                        item.type === 2
                            ?
                            <IconM name="hand-coin-outline" size={35} color={colors.primary} style={style.icon} />
                            :
                            item.type === 3
                                ?
                                <IconI name="calendar-clear-outline" size={32} color={colors.goodGraph} style={style.icon} />
                                :
                                null
                }
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        maxHeight: 100,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        flexDirection: 'row',
    },
    tittleContainer: {
        width: '78%',
        marginBottom: 9,
    },
    tittle: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        fontSize: 15,
    },
    messageContainer: {
        width: '78%',
        marginBottom: 60,
    },
    message: {
        color: colors.subtextColor,
        fontFamily: 'DMSans',
        fontSize: 13,
    },
    left: {
        height: '100%',
        width: '87%',
        paddingVertical: '5%',
        justifyContent: 'space-between',
        paddingLeft: '5%',
    },
    right: {
        height: '100%',
        width: '13%',
        justifyContent: 'flex-end',
        paddingBottom: '3%',
    },
    icon: {
        marginRight: 8,
    },
});
