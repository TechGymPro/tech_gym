import React, { useState } from 'react';
import { SimpleHeader } from '../simpleHeader';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TitleAndSubtitleCard } from '../titleAndSubtitleCard';
import { LongButton } from '../longButton';
import { SmallTitlesCard } from '../smallTitlesCard';
import ConfirmationCodeInput from '../codeField';

interface PhoneMailVerificationProps {
    title: string,
    subtitle: string,
    academy?: boolean
}

const PhoneMailVerification: React.FC<PhoneMailVerificationProps> = ({ title, subtitle, academy }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [invalidToken, setInvalidToken] = useState(true);

    function alert() {
        console.log('Verificar pressed');
    }

    return (
        <>
            <SimpleHeader customBackButton={() => navigation.navigate('Login')} />
            <TitleAndSubtitleCard
                title={title}
                subtitle={subtitle}
            />
            <ConfirmationCodeInput onCodeFilled={() => setInvalidToken(false)} />
            {!academy && (
                <>
                    <LongButton title={'Verificar'} disabled={invalidToken} onPress={() => alert()} />
                    <SmallTitlesCard
                        title={'Reenviar código em 23 segundos'}
                        subtitle={'Reenviar código'}
                    />
                </>
            )}

        </>
    );
};

export default PhoneMailVerification;