import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './style';
import colors from '../../global/colors';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { confirmPhoneToken, sendPhoneToken, userData } from '../../redux/authSlice';
import { SimpleHeader } from '../../components/simpleHeader';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import ConfirmationCodeInput from '../../components/codeField';
import { LongButton } from '../../components/longButton';
import { SmallTitlesCard } from '../../components/smallTitlesCard';

const VerifyPhone = () => {
    const { student_phone } = useAppSelector(userData);
    const [code, setCode] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [invalidToken, setInvalidToken] = useState(true);
    const dispatch = useAppDispatch();
    const [codeError, setCodeError] = useState(false);
    const [correctCode, setCorrectCode] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function reSendPhone() {
        dispatch(sendPhoneToken({ phone: student_phone }))
            .then((response: any) => {
                console.log(response);
                if (response.payload.data.response === 200) {
                    setTimeLeft(45);
                }
            });
    }

    async function confirmCode() {
        dispatch(confirmPhoneToken({ phone: student_phone, code }))
            .then((response) => {
                console.log(response, 50);
                if (response.payload && response.payload.response && response.payload.response.status === 401) {
                    setCodeError(true);
                } else if (response.payload && response.payload.status === 200) {
                    setCorrectCode(true);
                    if(response.payload.data.length > 0) {
                        navigation.navigate('Dashboard');
                    }else{
                        navigation.navigate('RegisterWelcome');
                    }
                }
            });
    }

    useEffect(() => {
        if (codeError) {
            if (code.length < 6) {
                setCodeError(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);


    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader customBackButton={() => navigation.navigate('Login')} />
            <TitleAndSubtitleCard
                title={'Confirmar celular'}
                subtitle={'Digite abaixo o código de 6 dígitos recebido'}
            />
            <ConfirmationCodeInput correct={correctCode} error={codeError} value={code} setValue={setCode} onCodeFilled={() => setInvalidToken(false)} />
            <LongButton title={'Verificar'} disabled={code.length < 6 || codeError} onPress={confirmCode} />
            <SmallTitlesCard
                title={`Reenviar código em ${timeLeft} segundos`}
                subtitle={'Reenviar código'}
                button
                onPress={reSendPhone}
                onPressDisabled={timeLeft !== 0}
            />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default VerifyPhone;
