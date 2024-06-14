import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/button';
import { Header } from '../../components/header';
import { InputForm } from '../../components/inputFom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SelectForm } from '../../components/selectForm';

const InfosI = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [nome, setNome] = useState<string>('');
    const [value, setValue] = useState<number>(0);
    const [birthDate, setBirthDate] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');

    const options = [
        { label: 'Perda de peso', value: 'Perda de peso' },
        { label: 'Ganho de peso', value: 'Ganho de peso' },
    ];

    return (
        <SafeAreaView style={style.container}>
            <Header
                backButton
            />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Nos conte mais sobre você'}
                marginCustom
            />
            <View style={style.inputContainer}>
                <InputForm
                    label={'Nome'}
                    placeholder={'Insira seu nome'}
                    onChange={setNome}
                    value={nome}
                />
                <InputForm
                    label={'CPF'}
                    placeholder={'Insira o cpf'}
                    onChange={setCpf}
                    value={cpf}
                />
                <InputForm
                    label={'Data de Nascimento'}
                    placeholder={'Informe sua data de nascimento'}
                    onChange={setBirthDate}
                    value={birthDate}
                />
                <SelectForm
                    label={'Objetivo'}
                    onChange={setValue}
                    value={value}
                    items={options}
                />
            </View>

            <LongButton
                title={'Próximo'}
                onPress={() => navigation.navigate('InfosII')}
            />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default InfosI;
