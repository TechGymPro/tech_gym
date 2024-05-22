import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';
import { SimpleHeader } from '../../components/simpleHeader';
import { InputForm } from '../../components/inputFom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const InfosIV = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Qual seu objetivo de peso'}
            />

            <LongButton
                title={'Próximo'}
                onPress={() => navigation.navigate('VerifyAcademy')} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default InfosIV;