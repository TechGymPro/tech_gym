import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {api} from '../../api/base';
import {InputForm} from '../../components/inputFom';
import {LoadingScreen} from '../../components/loadingScreen';
import {LongButton} from '../../components/longButton';
import {MainHeader} from '../../components/mainHeader';
import {SelectForm} from '../../components/selectForm';
import colors from '../../global/colors';
import {units, useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {
  updateUserBirthday,
  updateUserEmail,
  updateUserName,
  updateUserObjective,
  userData,
} from '../../redux/authSlice';
import {style} from './style';

const EditUserInformation = () => {
  const user = useAppSelector(userData);
  const dispatch = useAppDispatch();
  const [birthday, setBirthday] = useState(
    user && user.student_birth
      ? new Date(user.student_birth).toLocaleDateString('en-GB')
      : '',
  );
  const [email, setEmail] = useState(
    user && user.student_email ? user.student_email : '',
  );
  const [newPassword, setNewPassword] = useState('');
  const [name, setName] = useState(
    user && user.student_name ? user.student_name : '',
  );
  const [objective, setObjective] = useState(
    user && user.objective_id ? user.objective_id : 1,
  );
  const [loading, setLoading] = useState(false);

  const save = async () => {
    if (newPassword.length <= 5 && newPassword.length > 0) {
      Alert.alert('Senha muito curta');
      return;
    }
    try {
      if (user) {
        setLoading(true);
        await api.put('updateUser', {
          id: user.student_id,
          email: email !== user.student_email ? email : null,
          password: newPassword.length > 0 ? newPassword : null,
          name: name !== user.student_name ? name : null,
          objective: objective !== user.objective_id ? objective : null,
          birthday:
            new Date(birthday) !== new Date(user.student_birth)
              ? new Date(birthday)
              : null,
        });

        if (email !== user.student_email) {
          dispatch(updateUserEmail(email));
        }
        if (name !== user.student_name) {
          dispatch(updateUserName(name));
        }
        if (objective !== user.objective_id) {
          dispatch(updateUserObjective(objective));
        }
        if (birthday !== user.student_birth) {
          dispatch(updateUserBirthday(new Date(birthday)));
        }

        Alert.alert('Salvo com sucesso');
        setLoading(false);
      }
    } catch (error) {
      Alert.alert('Erro ao Salvar', 'Por favor tente novamente');
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
              label="Data de Nascimento"
              placeholder="Data de Nascimento"
              value={birthday}
              onChange={e => setBirthday(e)}
              time
            />
            <InputForm
              label="Email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e)}
            />
            <InputForm
              label="Nova senha (opcional)"
              placeholder="Opcional"
              value={newPassword}
              onChange={e => setNewPassword(e)}
            />
            <InputForm
              label="Nome"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e)}
            />
            <SelectForm
              onChange={e => setObjective(e)}
              value={objective}
              label="Objetivo"
              items={[
                {label: 'Perda de peso', value: 1},
                {label: 'Ganho de massa', value: 2},
              ]}
            />
          </View>
          <LongButton title="Salvar" onPress={() => save()} />
        </SafeAreaView>
      )}
    </>
  );
};

export default EditUserInformation;
