import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const cardsContent = [{
    index: 1,
    subtitle: 'Mensal',
    title: 70,
    options: ['Feature 1', 'Feature 2', 'Feature 3'],
    onPress: { undefined },
    discount: false
},
{
    index: 2,
    subtitle: 'Semestral',
    title: 370,
    options: ['Feature 1', 'Feature 2', 'Feature 3'],
    onPress: { undefined },
    discount: true
},
{
    index: 3,
    subtitle: 'Anual',
    title: 714,
    options: ['Feature 1', 'Feature 2', 'Feature 3'],
    onPress: { undefined },
    discount: false
}]

const PropositionOptions = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '30%', '35%', '40%', '45%', '55%', '65%', '75%', '85%',  '100%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <GestureHandlerRootView >
            <BottomSheetModalProvider>
                <View style={styles.container}>
                    <Button
                        onPress={handlePresentModalPress}
                        title="Present Modal"
                        color="black"
                    />
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <Text>Awesome 🎉</Text>
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default PropositionOptions;
