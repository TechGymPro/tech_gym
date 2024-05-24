import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './style';
import PhoneMailVerification from '../../components/phone-mailVerification';
import colors from '../../global/colors';

const VerifyPhone = () => {

    return (
        <SafeAreaView style={style.container}>
            <PhoneMailVerification title={'Confirmar celular'} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default VerifyPhone;