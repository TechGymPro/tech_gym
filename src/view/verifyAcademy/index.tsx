import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './style';
import PhoneMailVerification from '../../components/phone-mailVerification';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';

const VerifyAcademy = () => {

    function alert() {
        console.log('Verificar pressed');
    }

    return (
        <SafeAreaView style={style.container}>
            <PhoneMailVerification
                title={'Códico da academia'}
                subtitle={'Você pode conseguir esse código com qualquer representante da academia'}
                academy
            />
            <LongButton title={'Verificar'} disabled academy onPress={() => alert()} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default VerifyAcademy;