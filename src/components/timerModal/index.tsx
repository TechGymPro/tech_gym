/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../../global/colors';
import { ResizableWhiteCard } from '../resizableWhiteCard';
import Icon from 'react-native-vector-icons/Fontisto';
import Sound from 'react-native-sound';
import IconI from 'react-native-vector-icons/Ionicons';
import { style } from './style';
import { Actionsheet, Button, ActionsheetContent, ActionsheetBackdrop, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator } from '@gluestack-ui/themed';
import { LongButton } from '../button';
interface Props {
    // onclose: () => void;
    // next: () => void;
    time: number;
    isOpen: any;
    onOpen: any;
    onClose: any;
}

export const TimerModal: React.FC<Props> = ({ time, isOpen, onOpen, onClose, }) => {
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

    // function startCountdown() {
    //     let timeRemaining = time;

    //     const timer = setInterval(function () {
    //         const minutes = Math.floor((timeRemaining / 60000) % 60);
    //         const seconds = Math.floor((timeRemaining / 1000) % 60);

    //         console.log(`${minutes}:${seconds}`);

    //         timeRemaining -= 1000;

    //         setTime(time -= 1000);

    //         if (timeRemaining <= 0) {
    //             clearInterval(timer);
    //             console.log("Time's up!");
    //             play();
    //         }
    //     }, 1000);
    // }

    // useEffect(() => {
    //     startCountdown();
    // }, []);

    return (
        // <View style={style.container}>
        //     <ResizableWhiteCard height="40%" width="90%" children={
        //         <View style={style.subContainer}>
        //             <TouchableOpacity onPress={onclose} style={style.buttonClose}>
        //                 <Icon name="angle-left" size={23} color={colors.darkBackground} />
        //             </TouchableOpacity>
        //             <Text style={style.counterText}>{Math.floor((time / 60000) % 60) <= 9 ? `0${Math.floor((time / 60000) % 60)}` : Math.floor((time / 60000) % 60)}:{Math.floor((time / 1000) % 60) <= 9 ? `0${Math.floor((time / 1000) % 60)}` : Math.floor((time / 1000) % 60)}</Text>
        //             <TouchableOpacity style={style.button} onPress={() => {
        //                 next();
        //                 onclose();
        //                 stop();
        //             }}>
        //                 <Text style={style.buttonText}>Finalizar</Text>
        //             </TouchableOpacity>
        //         </View>
        //     } />
        // </View>
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
                            <Text style={style.timerText}>00</Text>
                            <Text style={style.counterText}>Minutos</Text>
                        </View>
                        <View style={style.subContainer}>
                            <Text style={style.timerText}>00</Text>
                            <Text style={style.counterText}>Segundos</Text>
                        </View>
                    </View>
                    <LongButton title={'Finalizar'} onPress={onClose} />
                </ActionsheetContent>
            </Actionsheet>
        </>
    );
};

