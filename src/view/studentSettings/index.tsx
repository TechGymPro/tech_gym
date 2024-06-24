import React from 'react';
import { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Header } from '../../components/header';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getNotifications, isLoading } from '../../redux/userSlice';
import { userData } from '../../redux/authSlice';
import { SettingsCard } from '../../components/settingsCard';
import { LongButton } from '../../components/button';
import SwitchItem from '../../components/switchItem';
import CustomSwitch from '../../components/switchItem';

const StudentSettings = () => {
    const [selected, setSelected] = useState(false)
    const loading = useAppSelector(isLoading);
    const dispatch = useAppDispatch();
    const user = useAppSelector(userData);

    const settings = [
        {
            id: 1,
            name: 'Conta'
        },
        {
            id: 2,
            name: 'Notificações'
        },
        {
            id: 3,
            name: 'Privacidade'
        },
        {
            id: 4,
            name: 'Segurança'
        },
        {
            id: 5,
            name: 'Pagamento'
        },
    ]

    const cardClick = () => {
        setSelected(true);
    };

    const onRefresh = () => {
        if (user) {
            dispatch(getNotifications({ gymId: user.gym_id }));
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <Header
                text='Configurações'
                backButton
            />
            <FlatList
                onRefresh={onRefresh}
                refreshing={loading}
                data={settings}
                renderItem={({ item, index }: any) => (
                    <SettingsCard key={index} onPress={() => cardClick} item={item} />
                )}
                keyExtractor={item => String(item.id)}
            />
            <SwitchItem text={'Modo escuro'} />
            <SwitchItem text={'Opção 2'} />
            <View style={style.buttonContainer}>
                <LongButton type='lightGrey' title={'Sair'} onPress={undefined} />
            </View>
        </SafeAreaView>
    );
};

export default StudentSettings;


