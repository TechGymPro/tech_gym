import React from 'react';
import { SafeAreaView } from 'react-native';
import { style } from './style';
import PhoneMailVerification from '../../components/phone-mailVerification';

const VerifyPhone = () => {

    return (
        <SafeAreaView style={style.container}>
            <PhoneMailVerification title={'Confirmar celular'} />
        </SafeAreaView>
    );
};

export default VerifyPhone;