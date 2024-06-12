import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, View } from 'react-native';
import colors from '../../global/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { isLoading as loadingFromAuth, userData } from '../../redux/authSlice';
import { LoadingScreen } from '../../components/loadingScreen';
import { Header } from '../../components/header';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import { CarouselBottom, CarouselTop } from '../../components/carousel';
import DashBoardGraph from '../../components/dashBoardGraph';
import { LongButton } from '../../components/button';
import { BottomOrTopSeparator } from '../../components/separators/bottomOrUp';
import DataCard from '../../components/dataCard';


const UserGoal = () => {
    const dispatch = useAppDispatch();
    const userInfos = useAppSelector(userData);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <>
            <SafeAreaView style={style.container}>
                <ScrollView style={{ height: '100%' }}>
                    <Header
                        backButton
                        hasNotificationIcon
                    />
                    <DataCard
                        type='data'
                        title={'Objetivo de peso'}
                        data={'68 kg'}
                    />

                    <DashBoardGraph />

                    <View style={style.measurementsContainer}>
                        <Text style={style.measurementsInfo}>Peso</Text>
                        <Text style={style.measurementsInfo}>76 Kg</Text>
                    </View>
                    <LongButton title={'Editar informações'} onPress={undefined} />
                    <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default UserGoal;

