/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import { MainHeader } from '../../components/mainHeader';
import { LargeCard } from '../../components/largeCard';
import { BottomOrTopSeparator } from '../../components/separators/bottomOrUp';
import { CardSeparator } from '../../components/separators/card';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Training = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <SafeAreaView style={style.container}>
            <MainHeader />
            <Image style={style.image} source={require('../../assets/img/gymGround.jpg')} />
            <FlatList
                data={[{ letter: 'A', title: 'Costas + Biceps + Antebraço' }, { letter: 'B', title: 'Membros inferiores' }, { letter: 'C', title: 'Peitoral + Ombro + Triceps' }, { letter: 'D', title: 'Abdominal' }]}
                renderItem={({ item }: any) => (
                    <LargeCard letter={item.letter} title={item.title} onPress={() => navigation.navigate('TrainingPlay')} />
                )}
                keyExtractor={item => item.letter}
                scrollEnabled
                ItemSeparatorComponent={() => (
                    <CardSeparator customHeight={20} />
                )}
                ListHeaderComponent={() => (
                    <BottomOrTopSeparator />
                )}
                ListFooterComponent={() => (
                    <BottomOrTopSeparator />
                )}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: '15%',
        width: '100%',
        resizeMode: 'cover',
    },
});

export default Training;
