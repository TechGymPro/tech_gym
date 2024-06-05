/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { Header } from '../../components/header';
import { Card } from '../../components/card';
import { BottomOrTopSeparator } from '../../components/separators/bottomOrUp';
import { CardSeparator } from '../../components/separators/card';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getExercises, isLoading, selectTraining, training } from '../../redux/userSlice';
import { userData } from '../../redux/authSlice';
import { division } from '../../@types/interfaces';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../global/colors';

const Training = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const loading = useAppSelector(isLoading);
    const exercises = useAppSelector(training);
    const user = useAppSelector(userData);
    const dispatch = useAppDispatch();

    const onRefresh = () => {
        if (user) {
            dispatch(getExercises({ gymId: user.gym_id, userId: user.student_id }));
        }
    };

    const cardPress = (e: division) => {
        dispatch(selectTraining({ navigation, exercise: e }));
    };

    return (
        <SafeAreaView style={style.container}>
            <Header />
            <Image style={style.image} source={require('../../assets/img/gymGround.jpg')} />
            <FlatList
                onRefresh={onRefresh}
                refreshing={loading}
                data={exercises}
                renderItem={({ item }) => (
                    <Card letter={item.letter} title={item.training_serie_name} onPress={() => cardPress(item)} />
                )}
                keyExtractor={item => item.training_serie_name}
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
                ListEmptyComponent={() => (
                    <View style={style.emptyContainer}>
                        <Icon color={colors.placeholderTextColor} name="user-slash" size={40} />
                        <Text style={style.textEmpty}>Sem exercícios registrados, por favor entre em contato com o professor mais próximo.</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};


export default Training;
