/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useState } from 'react';
import { FlatList, Modal, SafeAreaView, Text, View } from 'react-native';
import { MainHeader } from '../../components/mainHeader';
import { NotificationsCard } from '../../components/notificationsCard';
import { BottomOrTopSeparator } from '../../components/separators/bottomOrUp';
import { CardSeparator } from '../../components/separators/card';
import { NotificationModal } from '../../components/notificationModal';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getNotifications, isLoading, notification } from '../../redux/userSlice';
import { notification as notificationType } from '../../@types/interfaces';
import { userData } from '../../redux/authSlice';
import colors from '../../global/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Notifications = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const notifications = useAppSelector(notification);
    const [selected, setSelected] = useState<notificationType>({
        notifications_text: '',
        notifications_title: '',
        notifications_type: 1,
        notifications_user_id: 1,
    });
    const loading = useAppSelector(isLoading);
    const dispatch = useAppDispatch();
    const user = useAppSelector(userData);

    const cardClick = (e: notificationType) => {
        setSelected(e);
        setModalIsVisible(true);
    };

    const onRefresh = () => {
        if (user) {
            dispatch(getNotifications({ gymId: user.gym_id }));
        }
    };

    let array = [
        {
            notifications_text: 'a',
            notifications_title: 'a',
            notifications_type: 1,
            notifications_user_id: 1,

        },
        {
            notifications_text: 'b',
            notifications_title: 'b',
            notifications_type: 1,
            notifications_user_id: 1,
        },
    ]

    return (
        <SafeAreaView style={style.container}>
            <MainHeader disableNotification />
            <FlatList
                onRefresh={onRefresh}
                refreshing={loading}
                data={notifications}
                renderItem={({ item, index }: any) => (
                    <NotificationsCard key={index} onPress={() => cardClick(item)} item={item} />
                )}
                keyExtractor={item => String(item.notifications_user_id)}
                scrollEnabled
                ItemSeparatorComponent={() => (
                    <CardSeparator customHeight={18} />
                )}
                ListHeaderComponent={() => (
                    <BottomOrTopSeparator />
                )}
                ListFooterComponent={() => (
                    <BottomOrTopSeparator />
                )}
                ListEmptyComponent={() => (
                    <View style={style.emptyContainer}>
                        <Icon color={colors.placeholderTextColor} name="notifications-off-outline" size={40} />
                        <Text style={style.emptyText}>Sem notificações</Text>
                    </View>
                )}
            />
            <Modal visible={modalIsVisible} transparent animationType="fade" >
                <NotificationModal close={() => setModalIsVisible(false)} item={selected} />
            </Modal>
        </SafeAreaView>
    );
};

export default Notifications;


