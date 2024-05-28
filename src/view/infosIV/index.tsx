import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';
import { SimpleHeader } from '../../components/simpleHeader';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WeightHeightPicker } from '../../components/weightHeightPicker';

const InfosIV = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const weights = Array.from({ length: 141 }, (_, i) => i + 40);
    const [selectedWeight, setSelectedWeight] = useState(weights.indexOf(70));

    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Qual seu objetivo de peso'}
                marginCustom
            />

            <WeightHeightPicker
                dataSource={weights}
                value={selectedWeight}
                onChange={(index) => setSelectedWeight(index)}
                dimension='Kg'
            />
            <LongButton
                title={'Próximo'}
                onPress={() => navigation.navigate('VerifyAcademy')} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default InfosIV;