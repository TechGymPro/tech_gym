import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import IconI from 'react-native-vector-icons/Ionicons';
import colors from '../../global/colors';
import { ResizableWhiteCard } from '../resizableWhiteCard';
import { TimerModal } from '../timerModal';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
    trainingName: string;
    trainings: { series: number, rep: number, obs: string, name: string, restTime: number, ImageUrl: string }[];
}

export const TrainingStepper: React.FC<Props> = ({ trainingName, trainings }) => {
    const [actualStep, setActualStep] = useState(1);
    const [counterIsActive, setCounterIsActive] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const nextStep = () => {
        setActualStep(actualStep + 1);
    };

    const previousStep = () => {
        setActualStep(actualStep - 1);
    };

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.headerUp}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" size={25} color={colors.secondary} />
                    </TouchableOpacity>
                    <Text style={style.headerTextUp}>Treino {trainingName}</Text>
                    <Icon name="angle-left" size={25} color={colors.trainingBackground} />
                </View>
                <Text style={style.headerDown}>{actualStep} de {trainings.length} finalizados</Text>
            </View>
            <ResizableWhiteCard width="89%" height="72%" borderRadius={10} children={
                <View style={style.midContainer}>
                    <Image source={{ uri: trainings[actualStep - 1].ImageUrl }} style={style.image} />
                    <Text style={style.midTitle}>{trainings[actualStep - 1].name}</Text>
                    <View style={style.midSub}>
                        <View style={style.midLittleContainers}>
                            <Text style={style.midSubtitle}>Séries</Text>
                            <Text style={style.midNumbers}>{trainings[actualStep - 1].series}</Text>
                        </View>
                        <View style={style.midLittleContainers}>
                            <Text style={style.midSubtitle}>Séries</Text>
                            <Text style={style.midNumbers}>{trainings[actualStep - 1].rep}</Text>
                        </View>
                    </View>
                    <View style={style.midObsContainer}>
                        <Text style={style.midSubtitle}>Observação</Text>
                        <Text style={style.midObs}>{trainings[actualStep - 1].obs}</Text>
                    </View>
                    <TouchableOpacity style={style.midButton} onPress={() => setCounterIsActive(true)}>
                        <Text style={style.midButtonText}>Descansar</Text>
                        <IconI name="play" size={30} color={colors.darkBackground} />
                    </TouchableOpacity>
                </View>
            } />
            <View style={style.buttonContainer}>
                {actualStep < trainings.length && actualStep === 1
                    ?
                    <TouchableOpacity style={style.singleButton} onPress={() => nextStep()}>
                        <Text style={style.buttonText}>Próximo</Text>
                    </TouchableOpacity>
                    :
                    actualStep < trainings.length && actualStep > 1
                        ?
                        <View style={style.multipleButton}>
                            <TouchableOpacity style={style.multipleButtonWhite} onPress={() => previousStep()}>
                                <Text style={style.buttonText}>Voltar aqui</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.multipleButtonYellow} onPress={() => nextStep()}>
                                <Text style={style.buttonText} >Próximo</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={style.multipleButton}>
                            <TouchableOpacity style={style.multipleButtonWhite} onPress={() => previousStep()}>
                                <Text style={style.buttonText}>Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.multipleButtonYellow} onPress={() => navigation.navigate('Dashboard')}>
                                <Text style={style.buttonText}>Finalizar</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
            <Modal visible={counterIsActive} transparent>
                <TimerModal onclose={() => setCounterIsActive(false)} next={() => nextStep()} time={trainings[actualStep - 1].restTime} />
            </Modal>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '8%',
    },
    header: {
        height: '12%',
        justifyContent: 'space-evenly',
        paddingHorizontal: '5%',
        marginTop: '2%',
    },
    headerUp: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    headerTextUp: {
        color: colors.lightTextColor,
        fontSize: 24,
        fontFamily: 'Montserrat',
    },
    headerDown: {
        color: colors.primary,
        fontFamily: 'Montserrat',
        alignSelf: 'center',
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: '37%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'cover',
    },
    midContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '12%',
    },
    midTitle: {
        fontFamily: 'Montserrat',
        color: colors.mainTextColor,
        fontSize: 24,
    },
    midSubtitle: {
        fontFamily: 'Montserrat',
        color: colors.thirdColor,
        fontSize: 20,
    },
    midSub: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    midNumbers: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
        fontSize: 24,
    },
    midLittleContainers: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
    },
    midObs: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
        fontSize: 14,
        marginHorizontal: '15%',
        textAlign: 'center',
    },
    midButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: '50%',
        borderRadius: 12,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    midButtonText: {
        fontFamily: 'Montserrat',
        color: colors.mainTextColor,
        fontSize: 20,
    },
    midObsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    singleButton: {
        height: 40,
        backgroundColor: colors.primary,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
    },
    multipleButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    multipleButtonYellow: {
        height: 40,
        backgroundColor: colors.primary,
        borderRadius: 14,
        width: '42%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    multipleButtonWhite: {
        height: 40,
        backgroundColor: colors.secondary,
        borderRadius: 14,
        width: '42%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
