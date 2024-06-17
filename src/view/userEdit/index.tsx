import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { style } from './style';
import colors from '../../global/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/header';
import DataCard from '../../components/dataCard';
import { InputForm } from '../../components/inputFom';
import { SelectForm } from '../../components/selectForm';
import { LongButton } from '../../components/button';

const UserEdit = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [height, setHeight] = useState<string>('');
    const [value, setValue] = useState<number>(0);
    const [actualWeight, setActualWeight] = useState<string>('');
    const [wishedWeight, setWishedWeight] = useState<string>('');

    const options = [
        { label: 'Perda de peso', value: 'Perda de peso' },
        { label: 'Ganho de peso', value: 'Ganho de peso' },
    ];

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scroll}>
                <Header
                    backButton
                    hasNotificationIcon
                />
                <DataCard
                    type='profile'
                    title={'Meus dados'}
                    data={'Suas informações'}
                />
                <View style={style.inputContainer}>
                    <InputForm
                        label={'Altura (m)'}
                        placeholder={'Insira sua altura'}
                        onChange={setHeight}
                        value={height}
                    />
                    <InputForm
                        label={'Peso atual (kg)'}
                        placeholder={'Insira seu peso atual'}
                        onChange={setActualWeight}
                        value={actualWeight}
                    />
                    <InputForm
                        label={'Peso desejado (kg)'}
                        placeholder={'Informe sua meta de peso'}
                        onChange={setWishedWeight}
                        value={wishedWeight}
                    />
                    <SelectForm
                        label={'Objetivo'}
                        onChange={setValue}
                        value={value}
                        items={options}
                    />
                </View>

                <LongButton
                    title={'Salvar'}
                    onPress={() => navigation.navigate('InfosII')} />
                <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserEdit;
