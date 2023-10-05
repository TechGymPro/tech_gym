import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../global/colors';
import IconA from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';

interface Props {
    close: Function;
    item: { type: number, tittle: string, message: string, id: number };
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
                <View style={style.tittleContainer}>
                    <Text style={style.tittle}>{item.tittle}</Text>
                </View>
                <View style={style.messageContainer}>
                    <Text style={style.message}>{item.message}</Text>
                </View>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Lida</Text>
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={'#352700'} />
        </View>
    );
};

const style = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: colors.darkBackgroundOpacity,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: colors.secondary,
        minHeight: '5%',
        width: '88%',
        borderRadius: 15,
        alignItems: 'center',
        paddingBottom: 26,
    },
    topBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 4,
        paddingHorizontal: 2,
        marginBottom: 4,
    },
    tittleContainer: {
        width: '78%',
        marginBottom: 9,
    },
    tittle: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        fontSize: 18,
    },
    messageContainer: {
        width: '78%',
        marginBottom: 60,
    },
    message: {
        color: colors.subtextColor,
        fontFamily: 'DMSans',
        fontSize: 14,
    },
    button: {
        backgroundColor: colors.primary,
        width: '55%',
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
    },
    icon: {
        marginRight: 8,
    },
});
