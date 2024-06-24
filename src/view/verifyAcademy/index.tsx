import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { style } from './style';
import PhoneMailVerification from '../../components/phone-mailVerification';
import colors from '../../global/colors';
import { LongButton } from '../../components/button';

const VerifyAcademy = () => {

    function alert() {
        console.log('Verificar pressed');
    }

    return (
        <SafeAreaView style={style.container}>
            <PhoneMailVerification
                marginCustom
                academy
                title={'Código da academia'}
                subtitle={'Você pode conseguir esse código com qualquer representante da academia'}
            />
            <View style={style.containerButton}>
                <LongButton
                    type='grey'
                    disabled
                    title={'Verificar'}
                    onPress={() => alert()} />

            </View>
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default VerifyAcademy;
