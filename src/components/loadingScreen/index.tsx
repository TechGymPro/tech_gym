import React from 'react';
import { SafeAreaView, Text, Image, StatusBar } from 'react-native';
import { style } from './style';
import colors from '../../global/colors';

export const LoadingScreen = () => {
    return (
        <SafeAreaView style={style.container}>
            <Image source={require('../../assets/img/loading.gif')} />
            <Text style={style.text}>Carregando...</Text>
            <StatusBar backgroundColor={colors.secondary} />
        </SafeAreaView>
    );
};

