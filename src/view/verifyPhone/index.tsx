import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './style';
import colors from '../../global/colors';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useAppSelector } from '../../hooks/hooks';
import { userData } from '../../redux/authSlice';
import { Header } from '../../components/header';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import ConfirmationCodeInput from '../../components/codeField';
import { LongButton } from '../../components/button';
import { SmallTitlesCard } from '../../components/smallTitlesCard';
import { convertPhoneNumber } from '../../../utils/indext';

const VerifyPhone = () => {
    const { student_phone } = useAppSelector(userData);
    const [confirm, setConfirm] = useState<null | FirebaseAuthTypes.ConfirmationResult>(null);
    const [code, setCode] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [invalidToken, setInvalidToken] = useState(true);

    async function signInWithPhoneNumber() {
        console.log(convertPhoneNumber(student_phone));
        try {
            const confirmation = await auth().signInWithPhoneNumber(convertPhoneNumber(student_phone));
            console.log(confirmation);
            setConfirm(confirmation);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     signInWithPhoneNumber();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    async function confirmCode() {
        try {
            if (confirm === null) {
                throw new Error('Confirm error');
            }
            const response = await confirm.confirm(code);
            console.log(response);
        } catch (error) {
            console.log('Invalid code.');
        }
    }


    return (
        <SafeAreaView style={style.container}>
            <Header
                customBackButton={() => navigation.navigate('Login')}
                backButton
            />
            <TitleAndSubtitleCard
                title={'Confirmar celular'}
                subtitle={'Digite abaixo o código de 6 dígitos recebido'}
            />
            <ConfirmationCodeInput value={code} setValue={setCode} onCodeFilled={() => setInvalidToken(false)} />
            <LongButton title={'Confirmar'} disabled={invalidToken} onPress={confirmCode} />
            <LongButton title={'Verificar'} onPress={signInWithPhoneNumber} />
            <SmallTitlesCard
                title={'Reenviar código em 23 segundos'}
                subtitle={'Reenviar código'}
            />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default VerifyPhone;
