import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';
import { SimpleHeader } from '../../components/simpleHeader';
import { InputForm } from '../../components/inputFom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SelectForm } from '../../components/selectForm';

const InfosI = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [nome, setNome] = useState('');


    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Nos conte mais sobre você'}
                marginCustom
            />
            <View style={style.inputContainer}>
                <InputForm
                    label={'Nome'}
                    placeholder={''}
                    onChange={setNome}
                    value={nome}
                />
                <InputForm
                    label={'CPF'}
                    placeholder={''}
                    onChange={setNome}
                    value={nome}
                />
                <InputForm
                    label={'Data de Nascimento'}
                    placeholder={''}
                    onChange={setNome}
                    value={nome}
                />
                <SelectForm
                    label={'Objetivo'}
                    onChange={setNome}
                    value={0}
                    items={[]}
                />
            </View>

            <LongButton
                title={'Próximo'}
                onPress={() => navigation.navigate('InfosII')} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default InfosI;