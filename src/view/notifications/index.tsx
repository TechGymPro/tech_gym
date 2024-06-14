import React from 'react';
import { useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Header } from '../../components/header';
import { NotificationsCard } from '../../components/notificationsCard';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getNotifications, isLoading, notification } from '../../redux/userSlice';
import { notification as notificationType } from '../../@types/interfaces';
import { userData } from '../../redux/authSlice';
import colors from '../../global/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import SheetModal from '../../components/agreementModal';

const Notifications = () => {
    const [showActionsheet, setShowActionsheet] = useState(false);
    const notifications = useAppSelector(notification);
    const [selected, setSelected] = useState<notificationType>({
        notifications_text: '',
        notifications_title: '',
        notifications_type: 1,
        notifications_user_id: 1,
    });

    const notificacoes = [{
        notifications_text: 'algum texto akdjhfauidhfahdfaddkfakdjfkadjfkajdfahdfiaourakfn fauifduf',
        notifications_title: 'Anúncio para todos os alunos',
        notifications_type: 2,
        notifications_user_id: 1,
    },
    {
        notifications_text: 'algum texto akdjhfauidhfahdfaddkfakdjfkadjfkajdfahdfiaourakfn fauifduf',
        notifications_title: 'Promoção: indique e ganhe',
        notifications_type: 1,
        notifications_user_id: 2,
    },
    {
        notifications_text: 'algum texto akdjhfauidhfahdfaddkfakdjfkadjfkajdfahdfiaourakfn fauifduf',
        notifications_title: 'Não abriremos nesse feriado',
        notifications_type: 3,
        notifications_user_id: 3,
    },
    {
        notifications_text: 'algum texto akdjhfauidhfahdfaddkfakdjfkadjfkajdfahdfiaourakfn fauifduf',
        notifications_title: 'Não abriremos nesse feriado',
        notifications_type: 4,
        notifications_user_id: 4,
    }
    ]

    const loading = useAppSelector(isLoading);
    const dispatch = useAppDispatch();
    const user = useAppSelector(userData);

    const handleClose = () => setShowActionsheet(false);
    const handleOpen = () => setShowActionsheet(true);

    const cardClick = (e: notificationType) => {
        setSelected(e);
        handleOpen();
    };

    const onRefresh = () => {
        if (user) {
            dispatch(getNotifications({ gymId: user.gym_id }));
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <Header
                text='Notificações'
                backButton
            />
            <FlatList
                onRefresh={onRefresh}
                refreshing={loading}
                data={notificacoes}
                renderItem={({ item, index }: any) => (
                    <NotificationsCard key={index} onPress={() => cardClick(item)} item={item} />
                )}
                keyExtractor={item => String(item.notifications_user_id)}
                scrollEnabled

                ListEmptyComponent={() => (
                    <View style={style.emptyContainer}>
                        <Icon color={colors.placeholderTextColor} name="notifications-off-outline" size={40} />
                        <Text style={style.emptyText}>Sem notificações</Text>
                    </View>
                )}
            />
            <SheetModal
                type='Notificação'
                isOpen={showActionsheet}
                onOpen={cardClick}
                onClose={handleClose}
                title={selected.notifications_title}
                text={selected.notifications_text}
            />
        </SafeAreaView>
    );
};

export default Notifications;


