import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import colors from '../../global/colors';
import { SimpleHeader } from '../simpleHeader';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TitleAndSubtitleCard } from '../titleAndSubtitleCard';
import { LongButton } from '../longButton';
import { SmallTitlesCard } from '../smallTitlesCard';
import ConfirmationCodeInput from '../codeField';

interface PhoneMailVerificationProps {
    title: string,
}

const PhoneMailVerification: React.FC<PhoneMailVerificationProps> = ({ title }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [invalidToken, setInvalidToken] = useState(true);

    function alert(arg0: string) {
        console.log('Verificar pressed');
    }

    return (
        <>
            <SimpleHeader customBackButton={() => navigation.navigate('Login')} />
            <TitleAndSubtitleCard
                title={title}
                subtitle={'Digite abaixo o código de 6 dígitos recebido'}
            />
            <ConfirmationCodeInput onCodeFilled={() => setInvalidToken(false)} />

            <LongButton title={'Verificar'} disabled={invalidToken} onPress={() => alert('Pressed!')} />
            <SmallTitlesCard
                title={'Reenviar código em 23 segundos'}
                subtitle={'Reenviar código'}
            />
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        </>
    );
};

export default PhoneMailVerification;