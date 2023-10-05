import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';
import IconA from 'react-native-vector-icons/Entypo';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
    customBackButton?: Function;
    disableNotification?: boolean;
}

export const MainHeader: React.FC<Props> = ({ customBackButton, disableNotification }) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => customBackButton ? customBackButton() : navigation.goBack()}>
                <IconA name="chevron-small-left" size={44} color={colors.darkBackground} />
            </TouchableOpacity>
            <Text style={style.hello}>Olá, User</Text>
            {!disableNotification
                ?
                <TouchableOpacity onPress={() => disableNotification ? null : navigation.navigate('Notifications')}>
                    <Image source={require('../../assets/img/notificationActive-ico.png')} style={style.ico} />
                </TouchableOpacity>
                :
                <View style={style.ico} />}
        </View>
    );
};


const style = StyleSheet.create({
    container: {
        height: units.vh * 10,
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingBottom: '4%',
    },
    hello: {
        color: colors.darkBackground,
        fontSize: 22,
        fontFamily: 'Montserrat',
    },
    ico: {
        width: 38,
        height: 38,
    },
});
