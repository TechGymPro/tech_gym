import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from '../../global/colors';
import { TrainingStepper } from '../../components/trainingStepper';


const TrainingPlay = () => {
    return (
        <SafeAreaView style={style.container}>
            <TrainingStepper trainingName="B" trainings={[
                {
                    name: 'Agachamento livre',
                    obs: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
                    rep: 12,
                    series: 4,
                    restTime: 1000,
                    ImageUrl: 'https://vitat.com.br/wp-content/uploads/2022/10/fitness-woman-doing-squats-with.jpg,'
                },
                {
                    name: 'Agachamento sumô',
                    obs: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
                    rep: 12,
                    series: 4,
                    restTime: 12000,
                    ImageUrl: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2014/12/agachamento-kettlebell.jpg',
                },
                {
                    name: 'Agachamento búlgaro',
                    obs: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
                    rep: 20,
                    series: 3,
                    restTime: 15000,
                    ImageUrl: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2016/10/afundo-com-pe-de-tras-no-banco_1_0.jpg',
                },
            ]} />
            <StatusBar backgroundColor={colors.trainingBackground
            } />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.trainingBackground,
    },
});

export default TrainingPlay;

