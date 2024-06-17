import React, { useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-controls';
import { exercise } from '../../@types/interfaces';
import colors from '../../global/colors';
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
  const [counterIsActive, setCounterIsActive] = useState(false);
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
        text={`Treino ${trainingName}`}
        backButton
        darkTheme
      />
      <View style={style.progressContainer}>
        <Text style={style.subtitle}>
          {actualStep} de {trainings.length} finalizados
        </Text>
        <Text>Progress bar</Text>
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
          <View style={stylesImg.video}>
            <VideoPlayer
              source={{
                uri: trainings[actualStep - 1].exercise_url,
              }}
              style={stylesImg.video}
              repeat={true} // make it a loop
              paused={!trainings[actualStep - 1] || !isPlaying}
              controls={true}
              muted={isMuted}
              tapAnywhereToPause={true}
            />
            <View style={{ marginVertical: 2 }} />
            <Button
              onPress={() => setIsPlaying(p => !p)}
              title={isPlaying ? 'Stop' : 'Play'}
            />
            <View style={{ marginVertical: 2 }} />
            <Button
              onPress={() => setIsMuted(m => !m)}
              title={isMuted ? 'Unmute' : 'Mute'}
            />
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

        {/* <TouchableOpacity
          style={style.restButton}
          onPress={() => setCounterIsActive(true)}
          >
          <IconI name="play-outline" size={26} color={colors.darkBackground} />
          <Text style={style.midButtonText}>Descansar</Text>
        </TouchableOpacity> */}
        <TimerModal
          time={0}
          isOpen={showActionsheet}
          onOpen={handleOpen}
          onClose={handleClose}
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

const stylesImg = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 50,
  },
  uri: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50 * units.vh,
    width: '100%',
    marginTop: 10,
    resizeMode: 'contain',
  },
  imageSmall: {
    height: 10 * units.vh,
    width: '100%',
    marginTop: 10,
    resizeMode: 'contain',
  },

  video: {
    height: 40 * units.vh,
    width: '100%',
    // marginTop: 10,
    // resizeMode: 'contain',
  },
});
