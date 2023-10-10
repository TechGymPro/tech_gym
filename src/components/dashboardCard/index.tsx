import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../global/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
    item: { label: string, icon: string };
}

export const DashboardCard: React.FC<Props> = ({ item }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <TouchableOpacity style={style.container} onPress={() => item.icon === 'training' ? null : item.icon === 'fitness' ? navigation.navigate('Measurements') : item.icon === 'settings' ? navigation.navigate('EditUserInformation') : item.icon === 'notification' ? navigation.navigate('Notifications') : null}>
            {item.icon === 'training'
                ?
                <Image source={require('../../assets/img/training-ico.png')} style={style.icoTraining} />
                :
                item.icon === 'fitness'
                    ?
                    <Image source={require('../../assets/img/fitness-ico.png')} style={style.ico} />
                    :
                    item.icon === 'settings'
                        ?
                        <Image source={require('../../assets/img/settings-ico.png')} style={style.ico} />
                        :
                        item.icon === 'notification'
                            ?
                            <Image source={require('../../assets/img/notification-ico.png')} style={style.ico} />
                            :
                            null}
            <Text style={style.text}>{item.label}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: 140,
        width: 140,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '8%',
    },
    icoTraining: {
        width: '60%',
        height: 40,
        marginTop: 10,
    },
    ico: {
        width: 55,
        height: 55,
    },
    text: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins Regular',
        fontSize: 14,
    },
});

