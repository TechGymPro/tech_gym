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

const InfosII = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [nome, setNome] = useState('');


    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Qual sua altura'}
            />

            <LongButton
                title={'Próximo'}
                onPress={() => navigation.navigate('InfoIII')} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default InfosII;