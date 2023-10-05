/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useState } from 'react';
import { FlatList, Modal, SafeAreaView, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/mainHeader';
import colors from '../../global/colors';
import { NotificationsCard } from '../../components/notificationsCard';
import { BottomOrTopSeparator } from '../../components/separators/bottomOrUp';
import { CardSeparator } from '../../components/separators/card';
import { NotificationModal } from '../../components/notificationModal';

const Notifications = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            tittle: 'Anúncio para todos os alunos',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            type: 1,
        },
        {
            id: 2,
            tittle: 'Promoção: indique e ganhe',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            type: 2,
        },
        {
            id: 3,
            tittle: 'Não abriremos nesse feriado',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            type: 3,
        }]);
    const [selected, setSelected] = useState({
        type: 1,
        tittle: '',
        message: '',
        id: 0,
    });

    const cardClick = (e: { type: number, tittle: string, message: string, id: number }) => {
        setSelected(e);
        setModalIsVisible(true);
    };

    return (
        <SafeAreaView style={style.container}>
            <MainHeader disableNotification />
            <FlatList
                data={notifications}
                renderItem={({ item, index }: any) => (
                    <NotificationsCard key={index} onPress={() => cardClick(item)} item={item} />
                )}
                keyExtractor={item => String(item.id)}
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
            />
            <Modal visible={modalIsVisible} transparent animationType="fade" >
                <NotificationModal close={() => setModalIsVisible(false)} item={selected} />
            </Modal>
        </SafeAreaView>
    );
};

export default Notifications;


const style = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBackground,
        flex: 1,
    },
});
