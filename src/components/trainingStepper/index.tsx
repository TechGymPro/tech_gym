import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import IconI from 'react-native-vector-icons/Ionicons';
// import VideoPlayer from 'react-native-video-controls';
import { exercise } from '../../@types/interfaces';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';
import { ResizableWhiteCard } from '../resizableWhiteCard';
import { TimerModal } from '../timerModal';
import { style } from './style';
import { Header } from '../header';

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
        text='Treino B'
        backButton
        training
      />
      <View style={style.header}>
        <View style={style.headerUp}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={25} color={colors.secondary} />
          </TouchableOpacity>
          <Text style={style.headerTextUp}>Treino {trainingName}</Text>
          <Icon name="angle-left" size={25} color={colors.mainTextColor} />
        </View>
        <Text style={style.headerDown}>
          {actualStep} de {trainings.length} finalizados
        </Text>
      </View>
      <ResizableWhiteCard
        width="89%"
        height="72%"
        borderRadius={10}
        children={
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
                {/* <VideoPlayer
                  source={{
                    uri: trainings[actualStep - 1].exercise_url,
                  }}
                  style={stylesImg.video}
                  repeat={true} // make it a loop
                  paused={!trainings[actualStep - 1] || !isPlaying}
                  controls={true}
                  muted={isMuted}
                  tapAnywhereToPause={true}
                /> */}
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
            <Text style={style.midTitle}>
              {trainings[actualStep - 1].exercise_name}
            </Text>
            <View style={style.midSub}>
              <View style={style.midLittleContainers}>
                <Text style={style.midSubtitle}>Séries</Text>
                <Text style={style.midNumbers}>
                  {trainings[actualStep - 1].exercise_qtd_serie}
                </Text>
              </View>
              <View style={style.midLittleContainers}>
                <Text style={style.midSubtitle}>Repetições</Text>
                <Text style={style.midNumbers}>
                  {trainings[actualStep - 1].exercise_qtd_rep}
                </Text>
              </View>
            </View>
            <View style={style.midObsContainer}>
              <Text style={style.midSubtitle}>Observação</Text>
              <Text style={style.midObs}>
                {trainings[actualStep - 1].exercise_obs}
              </Text>
            </View>
            <TouchableOpacity
              style={style.midButton}
              onPress={() => setCounterIsActive(true)}>
              <Text style={style.midButtonText}>Descansar</Text>
              <IconI name="play" size={30} color={colors.darkBackground} />
            </TouchableOpacity>
          </View>
        }
      />
      <View style={style.buttonContainer}>
        {actualStep < trainings.length && actualStep === 1 ? (
          <TouchableOpacity
            style={style.singleButton}
            onPress={() => nextStep()}>
            <Text style={style.buttonText}>Próximo</Text>
          </TouchableOpacity>
        ) : actualStep < trainings.length && actualStep > 1 ? (
          <View style={style.multipleButton}>
            <TouchableOpacity
              style={style.multipleButtonWhite}
              onPress={() => previousStep()}>
              <Text style={style.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.multipleButtonYellow}
              onPress={() => nextStep()}>
              <Text style={style.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        ) : actualStep === trainings.length && trainings.length === 1 ? (
          <TouchableOpacity
            style={style.singleButton}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={style.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        ) : (
          <View style={style.multipleButton}>
            <TouchableOpacity
              style={style.multipleButtonWhite}
              onPress={() => previousStep()}>
              <Text style={style.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.multipleButtonYellow}
              onPress={() => navigation.navigate('Dashboard')}>
              <Text style={style.buttonText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Modal visible={counterIsActive} transparent>
        <TimerModal
          onclose={() => setCounterIsActive(false)}
          next={() =>
            actualStep === trainings.length
              ? navigation.navigate('Dashboard')
              : nextStep()
          }
          time={trainings[actualStep - 1].exercise_rest_time}
        />
      </Modal>
    </View>
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
