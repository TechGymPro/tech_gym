import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import colors from '../../global/colors';
import { TrainingStepper } from '../../components/trainingStepper';
import { style } from './style';
import { useAppSelector } from '../../hooks/hooks';
import { selectedTraining } from '../../redux/userSlice';


const TrainingPlay = () => {
    const exercises = [{
        exercise_id: 1,
        gym_id: 2,
        exercise_name: 'Agachamento sumô',
        exercise_url: 'url',
        exercise_qtd_serie: 4,
        exercise_qtd_rep: 12,
        exercise_obs: 'obs',
        exercise_rest_time: 2,
        type: 'B'
    },
    {
        exercise_id: 2,
        gym_id: 2,
        exercise_name: 'Agachamento livre',
        exercise_url: 'url',
        exercise_qtd_serie: 3,
        exercise_qtd_rep: 6,
        exercise_obs: 'obs',
        exercise_rest_time: 2,
        type: 'A'
    }]
    // const training = useAppSelector(selectedTraining);
    // if (training) {
    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ height: '100%' }}>
                {/* <TrainingStepper trainingName={training.training_serie_name} trainings={training.exercises} /> */}
                <TrainingStepper trainingName={'nome do treino'} trainings={exercises} />
                <StatusBar backgroundColor={colors.mainTextColor} />
            </ScrollView>
        </SafeAreaView>
    );
}
// };


export default TrainingPlay;

