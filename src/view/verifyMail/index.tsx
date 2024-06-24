import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { style } from './style';
import colors from '../../global/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { confirmEmailToken, isLoading, sendEmailToken, userData } from '../../redux/authSlice';
import { Header } from '../../components/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import ConfirmationCodeInput from '../../components/codeField';
import { LongButton } from '../../components/button';
import { SmallTitlesCard } from '../../components/smallTitlesCard';

const VerifyMail = ({ route }: any) => {
    const { student_email } = useAppSelector(userData);
    const loading = useAppSelector(isLoading);
    const [token, setToken] = useState(route && route.params && route.params.token ? route.params.token : '');
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [timeLeft, setTimeLeft] = useState(45);
    const [codeError, setCodeError] = useState(false);
    const [correctCode, setCorrectCode] = useState(false);
    const [code, setCode] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const reSendToken = () => {
        dispatch(sendEmailToken({ email: student_email }))
            .then((response: any) => {
                if (response.payload.status === 200) {
                    setToken(response.payload.data.token);
                    setTimeLeft(45);
                }
            });
    };

    async function confirmCode() {
        dispatch(confirmEmailToken({ token, code }))
            .then((response) => {
                console.log(response);
                if (response.payload && response.payload.response && response.payload.response.status === 401) {
                    setCodeError(true);
                } else if (response.payload && response.payload.status === 200) {
                    setCorrectCode(true);
                    navigation.navigate('InfosI');
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
            <Header
                customBackButton={() => navigation.navigate('SignUp')}
                backButton
            />
            <TitleAndSubtitleCard
                title={'Confirmar Email'}
                subtitle={'Digite abaixo o código de 6 dígitos recebido'}
            />
            <View>
                <ConfirmationCodeInput correct={correctCode} error={codeError} value={code} setValue={setCode} onCodeFilled={() => { }} />
                <LongButton
                    type='grey'
                    title={'Verificar'}
                    disabled={code.length < 6 || codeError}
                    onPress={confirmCode}
                    loading={loading}
                />
                <SmallTitlesCard
                    title={`Reenviar código em ${timeLeft} segundos`}
                    subtitle={'Reenviar código'}
                    button
                    onPress={reSendToken}
                    onPressDisabled={timeLeft !== 0}
                />
            </View>
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default VerifyMail;
