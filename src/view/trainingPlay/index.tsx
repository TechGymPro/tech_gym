import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import colors from '../../global/colors';
import { TrainingStepper } from '../../components/trainingStepper';
import { style } from './style';
import { useAppSelector } from '../../hooks/hooks';
import { selectedTraining } from '../../redux/userSlice';


const TrainingPlay = () => {
    const exercises = [{
        exercise_id: 1,
        gym_id: 2,
        exercise_name: 'agachamento',
        exercise_url: 'url',
        exercise_qtd_serie: 4,
        exercise_qtd_rep: 12,
        exercise_obs: 'obs',
        exercise_rest_time: 2,
        type: 'B'
    }]
    // const training = useAppSelector(selectedTraining);
    // if (training) {
    return (
        <SafeAreaView style={style.container}>
            {/* <TrainingStepper trainingName={training.training_serie_name} trainings={training.exercises} /> */}
            <TrainingStepper trainingName={'nome do treino'} trainings={exercises} />
            <StatusBar backgroundColor={colors.mainTextColor} />
        </SafeAreaView>
    );
}
// };


export default TrainingPlay;

