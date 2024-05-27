import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';
import { SimpleHeader } from '../../components/simpleHeader';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WeightHeightPicker } from '../../components/weightHeightPicker';

const InfosII = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const heights = Array.from({ length: 81 }, (_, i) => i + 140);
    const [selectedHeight, setSelectedHeight] = useState(heights.indexOf(160));

    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader />
            <TitleAndSubtitleCard
                title={'Informações iniciais'}
                subtitle={'Qual sua altura?'}
                marginCustom
            />


            <WeightHeightPicker
                dataSource={heights}
                value={selectedHeight}
                onChange={(index) => setSelectedHeight(index)}
                dimension={'cm'}
            />

            <LongButton
                title={'Próximo'}
                onPress={() => navigation.navigate('InfoIII')} />
            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView >
    );
};

export default InfosII;