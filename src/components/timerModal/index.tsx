/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
    Actionsheet, ActionsheetContent, ActionsheetBackdrop,
    ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator
} from '@gluestack-ui/themed';
import IconI from 'react-native-vector-icons/Ionicons';
import { LongButton } from '../button';
import { style } from './style';
import colors from '../../global/colors';
import Sound from 'react-native-sound';

interface Props {
    // onclose: () => void;
    // next: () => void;
    isOpen: any;
    onOpen: any;
    onClose: any;
    restTime: number;
}

export const TimerModal: React.FC<Props> = ({ isOpen, onOpen, onClose, restTime }) => {
    const [remainingTime, setRemainingTime] = useState(restTime * 60);

    const startCountdown = () => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(intervalId);
                    onClose();
                    return prevTime;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        if (isOpen) {
            setRemainingTime(restTime * 60);
            startCountdown();
        }
    }, [isOpen, restTime]);
    // Sound.setCategory('Playback');

    // var ding = new Sound('alarm.mp3', Sound.MAIN_BUNDLE, (error) => {
    //     if (error) {
    //         console.log('failed to load the sound', error);
    //         return;
    //     }
    // });

    // const play = () => {
    //     ding.play(success => {
    //         if (!success) {
    //             console.log('playback failed due to audio decoding errors');
    //         }
    //     });
    // };

    // const stop = () => {
    //     ding.stop();
    // };

    // useEffect(() => {
    // ding.setVolume(1);
    // return () => {
    //     ding.release();
    // };
    // }, []);

    // var [time, setTime] = useState(time);

    return (
        <>
            <TouchableOpacity
                style={style.restButton}
                onPress={onOpen}
            >
                <IconI name="play-outline" size={26} color={colors.darkBackground} />
                <Text style={style.midButtonText}>Descansar</Text>
            </TouchableOpacity>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <ActionsheetBackdrop />
                <ActionsheetContent >
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <View style={style.timerContainer}>
                        <View style={style.subContainer}>
                            <Text style={style.timerText}>{String(Math.floor(remainingTime / 60)).padStart(2, '0')}</Text>
                            <Text style={style.counterText}>Minutos</Text>
                        </View>
                        <View style={style.subContainer}>
                            <Text style={style.timerText}>{String(remainingTime % 60).padStart(2, '0')}</Text>
                            <Text style={style.counterText}>Segundos</Text>
                        </View>
                    </View>
                    <LongButton title={'Finalizar'} onPress={onClose} />
                </ActionsheetContent>
            </Actionsheet>
        </>
    );
};
