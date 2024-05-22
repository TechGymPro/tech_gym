import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './style';
import PhoneMailVerification from '../../components/phone-mailVerification';
import colors from '../../global/colors';

const VerifyMail = () => {

    return (
        <SafeAreaView style={style.container}>
            <PhoneMailVerification
                title={'Confirmar email'}
                subtitle={'Digite abaixo o código de 6 dígitos recebido'}
            />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default VerifyMail;
