/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getExercises, isLoading, selectTraining, training } from '../../redux/userSlice';
import { userData } from '../../redux/authSlice';
import { division } from '../../@types/interfaces';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../global/colors';
import { Header } from '../../components/header';
import DataCard from '../../components/dataCard';
import TrainingCard from '../../components/trainingCard';

const Training = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const loading = useAppSelector(isLoading);
    const exercises = useAppSelector(training);
    const user = useAppSelector(userData);
    const dispatch = useAppDispatch();

    const onRefresh = () => {
        if (user) {
            dispatch(getExercises({ gymId: user.gym_id as number, userId: String(user.student_id) }));
        }
    };

    const cardPress = (e: division) => {
        dispatch(selectTraining({ navigation, exercise: e }));
    };

    const exerciseList = [
        {
            title: 'Costa + Bíceps + Ombro',
            training_serie_name: 'A',
            text: 'Exercise Group A'
        },
        {
            title: 'Membros inferiores',
            training_serie_name: 'B',
            text: 'Exercise Group B'
        },
        {
            title: 'Peitoral + Ombro',
            training_serie_name: 'C',
            text: 'Exercise Group C'
        },
        {
            title: 'Abdominal',
            training_serie_name: 'D',
            text: 'Exercise Group D'
        },
    ]

    return (
        <SafeAreaView style={style.container}>
            <Header
                backButton
                hasNotificationIcon
            />
            <DataCard
                type='training'
                title={'Exercícios'}
                data={'A B C D'}
            />
            <FlatList
                onRefresh={onRefresh}
                refreshing={loading}
                data={exerciseList}
                renderItem={({ item }) => (
                    <TrainingCard
                        type={item.training_serie_name}
                        title={item.title}
                        text={item.text}
                    />
                )}
                keyExtractor={item => item.training_serie_name}
                scrollEnabled
                ListEmptyComponent={() => (
                    <View style={style.emptyContainer}>
                        <Icon color={colors.placeholderTextColor} name="user-slash" size={40} />
                        <Text style={style.textEmpty}>Sem exercícios registrados, por favor entre em contato com o professor mais próximo.</Text>
                    </View>
                )} />
        </SafeAreaView>
    );
};


export default Training;
