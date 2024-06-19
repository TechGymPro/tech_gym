import React, { useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import { exercise } from '../../@types/interfaces';
import { units } from '../../hooks/hooks';
import { TimerModal } from '../timerModal';
import { style } from './style';
import { Header } from '../header';
import TabView from '../tabview';
import { TabButtonType } from '../tabview/tabbutons';
import { LongButton, SmallButton } from '../button';

interface Props {
  trainingName: string;
  trainings: exercise[];
}

export const TrainingStepper: React.FC<Props> = ({ trainingName, trainings }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [actualStep, setActualStep] = useState(1);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(false);
  const handleOpen = () => setShowActionsheet(true);


  const training: TabButtonType[] = [
    { title: 'Séries', value: trainings[actualStep - 1].exercise_qtd_serie },
    { title: 'Repetições', value: trainings[actualStep - 1].exercise_qtd_rep },
    { title: 'Observações', value: trainings[actualStep - 1].exercise_obs },
  ]
  console.log(
    'trainings-------------------------------------------------------------------------',
  );
  console.log(trainings);
  console.log(
    'trainings-------------------------------------------------------------------------',
  );
  const nextStep = () => {
    setActualStep(actualStep + 1);
  };

  const previousStep = () => {
    setActualStep(actualStep - 1);
  };

  return (
    <View style={style.container}>
      <Header
        text={`Treino B`}
        backButton
        darkTheme
      />
      <View style={style.progressContainer}>
        <Text style={style.subtitle}>
          {actualStep} de {trainings.length} finalizados
        </Text>
        <View style={style.progressBar}>
          <View style={[style.fill, { width: `${(actualStep / trainings.length) * 100}%` }]}></View>
        </View>
      </View>

      <View style={style.midContainer}>
        {trainings[actualStep - 1].exercise_url &&
          trainings[actualStep - 1].type === 'image' ? (
          <Image
            source={{ uri: trainings[actualStep - 1].exercise_url }}
            style={style.image}
          />
        ) : trainings[actualStep - 1].exercise_url &&
          trainings[actualStep - 1].type === 'video' ? (
          <View style={style.video}>
            <Video
              source={{
                uri: trainings[actualStep - 1].exercise_url,
              }}
              style={style.video}
              repeat={true}
              paused={!trainings[actualStep - 1] || !isPlaying}
              controls={true}
              muted={isMuted}
            />
            {/* <View style={style.containerButton}>
              <SmallButton title={isPlaying ? 'Stop' : 'Play'} onPress={() => setIsPlaying(p => !p)} />
              <SmallButton title={isMuted ? 'Unmute' : 'Mute'} onPress={() => setIsMuted(m => !m)} />
            </View> */}
          </View>
        ) : (
          <Image
            source={require('../../assets/img/empty_exercise.png')}
            style={style.image}
          />
        )}
        <Text style={style.exerciseTitle}>
          {trainings[actualStep - 1].exercise_name}
        </Text>

        <TabView
          darkTheme
          options={training}
        />

        <TimerModal
          isOpen={showActionsheet}
          onOpen={handleOpen}
          onClose={handleClose}
          restTime={trainings[actualStep - 1].exercise_rest_time}
        />
      </View>

      <View style={style.bottomContainer}>
        {actualStep < trainings.length && actualStep === 1 ? (
          <LongButton title={'Próximo'} onPress={() => nextStep()} />
        ) : actualStep < trainings.length && actualStep > 1 ? (
          <View style={style.containerButton}>
            <SmallButton title={'Anterior'} type='grey' onPress={() => previousStep()} />
            <SmallButton title={'Próximo'} onPress={() => nextStep()} />
          </View>
        ) : actualStep === trainings.length && trainings.length === 1 ? (
          <LongButton title={'Finalizar'} onPress={() => navigation.navigate('Dashboard')} />
        ) : (
          <View style={style.containerButton}>
            <SmallButton title={'Anterior'} type='grey' onPress={() => previousStep()} />
            <SmallButton title={'Finalizar'} onPress={() => navigation.navigate('Dashboard')} />
          </View>
        )}
      </View>
    </View >
  );
};
