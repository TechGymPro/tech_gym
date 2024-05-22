import React from 'react';
import { SafeAreaView } from 'react-native';
import { style } from './style';
import PhoneMailVerification from '../../components/phone-mailVerification';

const VerifyMail = () => {

    return (
        <SafeAreaView style={style.container}>
            <PhoneMailVerification title={'Confirmar email'} />
        </SafeAreaView>
    );
};

export default VerifyMail;