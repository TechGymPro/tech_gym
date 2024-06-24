import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, View } from 'react-native';
import colors from '../../global/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { units, useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { isLoading as loadingFromAuth, userData } from '../../redux/authSlice';
import { Header } from '../../components/header';
import DashBoardGraph from '../../components/dashBoardGraph';
import { LongButton } from '../../components/button';
import DataCard from '../../components/dataCard';
import TabView from '../../components/tabview';
import { TabButtonType } from '../../components/tabview/tabbutons';

const UserGoal = () => {
    const dispatch = useAppDispatch();
    const userInfos = useAppSelector(userData);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const measurement: TabButtonType[] = [
        { title: 'Altura', value: '1.65 m' },
        { title: 'Peso', value: '70 Kg' },
        { title: 'IMC', value: 'valorIMC' },
    ]
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
                    <View style={{ height: units.vh * 48 }}>
                        <DashBoardGraph />
                    </View>

                    <TabView options={measurement} />

                    <View style={{ marginBottom: units.vh * 15 }}>
                        <LongButton title={'Editar informações'} onPress={undefined} />
                    </View>
                    <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default UserGoal;
