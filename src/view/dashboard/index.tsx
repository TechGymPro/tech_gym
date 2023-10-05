/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, StatusBar, StyleSheet, View, FlatList } from 'react-native';
import colors from '../../global/colors';
import { MainHeader } from '../../components/mainHeader';
import { DashboardCard } from '../../components/dashboardCard';
import { CardSeparator } from '../../components/separators/card';
import { BottomOrTopSeparator } from '../../components/separators/bottomOrUp';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const Dashboard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <View style={style.container}>
            <MainHeader customBackButton={() => navigation.navigate('Login')} />
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
        </View>
    );
};

export default Dashboard;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBackground,
    },
    image: {
        height: '28%',
        width: '100%',
        resizeMode: 'cover',
    },
    grid: {
        paddingHorizontal: '10%',
    },
    wrapper: {
        justifyContent: 'space-between',
    },
});

