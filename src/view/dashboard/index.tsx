import React, { useEffect } from 'react';
import { Image, StatusBar, SafeAreaView, FlatList, ScrollView } from 'react-native';
import colors from '../../global/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAll } from '../../redux/userSlice';
import { isLoading as loadingFromAuth, userData } from '../../redux/authSlice';
import { LoadingScreen } from '../../components/loadingScreen';
import { Header } from '../../components/header';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import { CarouselBottom, CarouselTop } from '../../components/carousel';
import DashBoardGraph from '../../components/dashBoardGraph';


const Dashboard = () => {
    const dispatch = useAppDispatch();
    const userInfos = useAppSelector(userData);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const loadingAuth = useAppSelector(loadingFromAuth);

    useEffect(() => {
        if (!loadingAuth) {
            if (userInfos) {
                // dispatch(getAll({ gymId: userInfos.gym_id, userId: userInfos.student_id }));
            } else {
                navigation.goBack();
            }
        }
                // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingAuth]);

    return (
        <>
            {loadingAuth
                ?
                <LoadingScreen />
                :
                <SafeAreaView style={style.container}>
                    <ScrollView style={{ height: '100%' }}>
                        <Header
                            hasNotificationIcon
                        />
                        <TitleAndSubtitleCard
                            title={'Olá, User'}
                        />
                        <CarouselTop />
                        <CarouselBottom />
                        <DashBoardGraph />
                        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
                    </ScrollView>
                </SafeAreaView>
            }
        </>
    );
};

export default Dashboard;

