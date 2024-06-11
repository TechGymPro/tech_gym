import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, View } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/button';
import { Header } from '../../components/header';
import { InputForm } from '../../components/inputFom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { isLoading, sendEmailToken, updateUserEmail, userData } from '../../redux/authSlice';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const GetEmail = () => {
    const [emailIsValid, setEmailIsValid] = useState(false);
    const { student_email } = useAppSelector(userData);
    const loading = useAppSelector(isLoading);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(student_email);
    };

    const handleSubmit = () => {
        if (!validateEmail()) {
            Alert.alert('Erro', 'Por favor, insira um endereço de email válido.');
            return;
        }
        dispatch(sendEmailToken({ email: student_email }))
            .then((response) => {
                console.log(response);
                navigation.navigate('VerifyMail', {token: response.payload.data.token});
            });
    };
    return (
        <SafeAreaView style={style.container}>
            <Header backButton />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Digite abaixo seu email'}
                marginCustom
            />
            <View style={style.inputContainer}>
                <InputForm
                    email
                    placeholder={'Insira seu email'}
                    onChange={(e) => {
                        if (validateEmail()) {
                            setEmailIsValid(true);
                        } else {
                            setEmailIsValid(false);
                        }
                        dispatch(updateUserEmail(e));
                    }}
                    value={student_email}
                />
            </View>
            <LongButton
                title={'Próximo'}
                disabled={!emailIsValid}
                loading={loading}
                onPress={handleSubmit} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default GetEmail;
