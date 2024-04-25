/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { Image, StatusBar, SafeAreaView, FlatList } from 'react-native';
import colors from '../../global/colors';
import { MainHeader } from '../../components/mainHeader';
import { CardSeparator } from '../../components/separators/card';
import { BottomOrTopSeparator } from '../../components/separators/bottomOrUp';
import { DashboardCard } from '../../components/dashboardCard';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAll } from '../../redux/userSlice';
import { isLoading as loadingFromAuth, userData } from '../../redux/authSlice';
import { LoadingScreen } from '../../components/loadingScreen';


const Dashboard = () => {
    const dispatch = useAppDispatch();
    const userInfos = useAppSelector(userData);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const loadingAuth = useAppSelector(loadingFromAuth);

    useEffect(() => {
        if (!loadingAuth) {
            if (userInfos) {
                dispatch(getAll({ gymId: userInfos.gym_id, userId: userInfos.student_id }));
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
                    <MainHeader customBackButton={() => navigation.navigate('Login')} returnLogoff />
                    <Image style={style.image} source={require('../../assets/img/menTraining.jpg')} />
                    <FlatList
                        data={[{ label: 'Treinos', icon: 'training' }, { label: 'Peso / Medidas', icon: 'fitness' }, { label: 'Configurações', icon: 'settings' }, { label: 'Notícias', icon: 'notification' }]}
                        renderItem={({ item, index }: any) => (
                            <DashboardCard key={index} item={item} />
                        )}
                        keyExtractor={item => item.label}
                        style={style.grid}
                        scrollEnabled
                        numColumns={2}
                        columnWrapperStyle={style.wrapper}
                        ItemSeparatorComponent={() => (
                            <CardSeparator />
                        )}
                        ListHeaderComponent={() => (
                            <BottomOrTopSeparator />
                        )}
                        ListFooterComponent={() => (
                            <BottomOrTopSeparator />
                        )}
                    />
                    <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
                </SafeAreaView>
            }
        </>
    );
};

export default Dashboard;

