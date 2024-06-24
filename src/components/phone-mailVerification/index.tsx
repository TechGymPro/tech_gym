import React, { useState } from 'react';
import { Header } from '../header';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TitleAndSubtitleCard } from '../titleAndSubtitleCard';
import { LongButton } from '../button';
import { SmallTitlesCard } from '../smallTitlesCard';
import ConfirmationCodeInput from '../codeField';

interface PhoneMailVerificationProps {
    title: string,
    subtitle: string,
    academy?: boolean
    marginCustom?: boolean
}

const PhoneMailVerification: React.FC<PhoneMailVerificationProps> = ({ title, subtitle, academy, marginCustom }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [invalidToken, setInvalidToken] = useState(true);

    function alert() {
        console.log('Verificar pressed');
    }

    return (
        <>
            <Header
                customBackButton={() => navigation.navigate('SignUp')}
                backButton
            />
            {marginCustom ? (
                <TitleAndSubtitleCard
                    title={title}
                    subtitle={subtitle}
                    marginCustom
                />
            ) :
                <TitleAndSubtitleCard
                    title={title}
                    subtitle={subtitle}
                />}

            <ConfirmationCodeInput
                onCodeFilled={() => setInvalidToken(false)}
                value={''}
                setValue={function (e: string): void {
                    throw new Error('Function not implemented.');
                }}
            />
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
