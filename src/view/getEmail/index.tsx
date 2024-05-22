import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';
import { SimpleHeader } from '../../components/simpleHeader';
import { InputForm } from '../../components/inputFom';
import validator from 'validator';

const GetEmail = () => {
    const [email, setEmail] = useState('');

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            Alert.alert("Erro", "Por favor, insira um endereço de email válido.");
            return;
        }
        Alert.alert("Sucesso", "Email enviado!");
    };
    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Digite abaixo seu email'}
            />
            <View style={style.inputContainer}>
                <InputForm
                    email
                    placeholder={''}
                    onChange={setEmail}
                    value={email}
                />
            </View>
            <LongButton
                title={'Próximo'}
                onPress={handleSubmit} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default GetEmail;