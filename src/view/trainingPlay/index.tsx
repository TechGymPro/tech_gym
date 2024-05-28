import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import colors from '../../global/colors';
import { TrainingStepper } from '../../components/trainingStepper';
import { style } from './style';
import { useAppSelector } from '../../hooks/hooks';
import { selectedTraining } from '../../redux/userSlice';


const TrainingPlay = () => {
    const training = useAppSelector(selectedTraining);
    if (training) {
        return (
            <SafeAreaView style={style.container}>
                <TrainingStepper trainingName={training.training_serie_name} trainings={training.exercises} />
                <StatusBar backgroundColor={colors.trainingBackground} />
            </SafeAreaView>
        );
    }
};


export default TrainingPlay;

