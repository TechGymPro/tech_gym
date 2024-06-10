import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/button';
import { Header } from '../../components/header';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const RegisterWelcome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    function alert() {
        console.log('Continuar pressed');
    }

    return (
        <SafeAreaView style={style.container}>
            <Header
                backButton
            />
            <TitleAndSubtitleCard
                title={'Você é novo por aqui'}
                subtitle={
                    `Bem-vindo, vamos fazer algumas perguntas para criarmos seu cadastro, não se preocupe, isso só será no primeiro acesso`
                }
            />
            <LongButton title={'Continuar'} onPress={() => alert()} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default RegisterWelcome;
