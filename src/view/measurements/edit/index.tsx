import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {unMaskNumbersToString} from '../../../../utils/masks';
import {api} from '../../../api/base';
import {InputForm} from '../../../components/inputFom';
import {LoadingScreen} from '../../../components/loadingScreen';
import {LongButton} from '../../../components/longButton';
import {MainHeader} from '../../../components/mainHeader';
import {SelectForm} from '../../../components/selectForm';
import colors from '../../../global/colors';
import {units, useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {
  getStudentData,
  updateUserObjective,
  userData,
} from '../../../redux/authSlice';
import {style} from './style';

const MeasurementsEdit = () => {
  const user = useAppSelector(userData);
  const dispatch = useAppDispatch();
  const [altura, setAltura] = useState(
    user && user.student_height ? String(user.student_height) : '',
  );
  const [peso, setPeso] = useState(
    user && user.student_actual_weight
      ? unMaskNumbersToString(user.student_actual_weight)
      : '',
  );
  const [pesoDesejado, setPesoDesejado] = useState(
    user && user.student_wished_weight
      ? unMaskNumbersToString(user.student_wished_weight)
      : '',
  );
  const [objective, setObjective] = useState(
    user && user.objective_id ? user.objective_id : 1,
  );

  const [pesoInicial, setPesoInicial] = useState(
    user && user.student_initial_weight
      ? unMaskNumbersToString(user.student_initial_weight)
      : '',
  );
  const [loading, setLoading] = useState(false);

  const save = async () => {
    try {
      if (user) {
        setLoading(true);

        await api.put('updateHeightWeight', {
          id: user.student_id,
          height:
            Number(altura) !== user.student_height ? Number(altura) : null,
          initialWeight:
            Number(pesoInicial) !== user.student_initial_weight
              ? Number(pesoInicial)
              : null,
          actualWeight:
            Number(peso) !== user.student_actual_weight ||
            Number(pesoDesejado) !== user.student_wished_weight
              ? Number(peso)
              : null,
          wishedWeight:
            Number(peso) !== user.student_actual_weight ||
            Number(pesoDesejado) !== user.student_wished_weight
              ? Number(pesoDesejado)
              : null,
          objective: objective !== user.objective_id ? objective : null,
        });

        // if (Number(altura) !== user.student_height) {
        //   dispatch(updateUserHeight(Number(altura)));
        // }
        // if (
        //   Number(peso) !== user.student_actual_weight ||
        //   Number(pesoDesejado) !== user.student_wished_weight
        // ) {
        //   dispatch(updateUserWeight(Number(peso)));
        // }
        // if (Number(pesoDesejado) !== user.student_wished_weight) {
        //   dispatch(updateUserWishedWeight(Number(pesoDesejado)));
        // }
        if (objective !== user.objective_id) {
          dispatch(updateUserObjective(objective));
        }
        Alert.alert('Salvo com sucesso');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao Salvar', 'Por favor tente novamente');
    } finally {
      dispatch(getStudentData());
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <SafeAreaView style={style.container}>
          <MainHeader />
          <View style={style.titleContainer}>
            <View style={style.iconContainer}>
              <Icon
                name="edit"
                size={units.vw * 4.8}
                color={colors.secondary}
              />
            </View>
            <Text style={style.tittle}>Informações de usuário</Text>
          </View>
          <View style={style.inputsContainer}>
            <InputForm
              label="Altura (cm)"
              placeholder="0.00"
              value={altura}
              onChange={e => setAltura(e)}
              height
            />
            <InputForm
              label="Peso inicial (kg)"
              placeholder="0"
              value={pesoInicial}
              onChange={e => setPesoInicial(e)}
              weightRegx
            />
            <InputForm
              label="Peso Atual (kg)"
              placeholder="0"
              value={peso}
              onChange={e => setPeso(e)}
              weightRegx
            />

            <InputForm
              label="Peso desejado (kg)"
              placeholder="0"
              value={pesoDesejado}
              onChange={e => setPesoDesejado(e)}
              weightRegx
            />
            <SelectForm
              label="Objetivo"
              items={[
                {label: 'Perda de peso', value: 1},
                {label: 'Ganho de massa', value: 2},
              ]}
              value={objective}
              onChange={e => setObjective(e)}
            />
          </View>
          <LongButton title="Salvar" onPress={() => save()} />
        </SafeAreaView>
      )}
    </>
  );
};

export default MeasurementsEdit;
