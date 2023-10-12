/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../global/colors';
import { ResizableWhiteCard } from '../resizableWhiteCard';
import Icon from 'react-native-vector-icons/Fontisto';
import Sound from 'react-native-sound';

interface Props {
    onclose: () => void;
    next: () => void;
    time: number;
}

export const TimerModal: React.FC<Props> = ({ next, onclose, time }) => {



    var [time, setTime] = useState(time);

    function startCountdown() {
        let timeRemaining = time;

        const timer = setInterval(function () {
            const minutes = Math.floor((timeRemaining / 60000) % 60);
            const seconds = Math.floor((timeRemaining / 1000) % 60);

            console.log(`${minutes}:${seconds}`);

            timeRemaining -= 1000;

            setTime(time -= 1000);

            if (timeRemaining <= 0) {
                clearInterval(timer);
                console.log("Time's up!");
                let sound = new Sound(require('../../assets/sound/alarm.mp3'));
                sound.play(()=> sound.release());
            }
        }, 1000);
    }

    useEffect(() => {
        startCountdown();
    }, []);

    return (
        <View style={style.container}>
            <ResizableWhiteCard height="40%" width="90%" children={
                <View style={style.subContainer}>
                    <TouchableOpacity onPress={onclose} style={style.buttonClose}>
                        <Icon name="angle-left" size={23} color={colors.darkBackground} />
                    </TouchableOpacity>
                    <Text style={style.counterText}>{Math.floor((time / 60000) % 60) <= 9 ? `0${Math.floor((time / 60000) % 60)}` : Math.floor((time / 60000) % 60)}:{Math.floor((time / 1000) % 60) <= 9 ? `0${Math.floor((time / 1000) % 60)}` : Math.floor((time / 1000) % 60)}</Text>
                    <TouchableOpacity style={style.button} onPress={()=>{
                        next();
                        onclose();
                    }}>
                        <Text style={style.buttonText}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            } />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackgroundOpacity,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        flex: 1,
        padding: '4%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonClose: {
        alignSelf: 'flex-start',
    },
    counterText: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        fontSize: 75,
    },
    button: {
        backgroundColor: colors.primary,
        height: 50,
        width: '60%',
        borderRadius: 15,
        marginBottom: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1%',
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        fontSize: 20,
    },
});
