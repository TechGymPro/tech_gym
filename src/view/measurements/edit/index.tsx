import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { MainHeader } from '../../../components/mainHeader';
import colors from '../../../global/colors';
import { InputForm } from '../../../components/inputFom';
import { LongButton } from '../../../components/longButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SelectForm } from '../../../components/selectForm';
import { style } from './style';
import { units, useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { updateUserHeight, updateUserObjective, updateUserWeight, updateUserWishedWeight, userData } from '../../../redux/authSlice';
import { LoadingScreen } from '../../../components/loadingScreen';
import { api } from '../../../api/base';


const MeasurementsEdit = () => {
    const user = useAppSelector(userData);
    const dispatch = useAppDispatch();
    const [altura, setAltura] = useState(user && user.student_height ? String(user.student_height) : '');
    const [peso, setPeso] = useState(user && user.student_actual_weight ? String(user.student_actual_weight) : '');
    const [pesoDesejado, setPesoDesejado] = useState(user && user.student_wished_weight ? String(user.student_wished_weight) : '');
    const [objective, setObjective] = useState(user && user.objective_id ? user.objective_id : 1);
    const [loading, setLoading] = useState(false);

    const save = async () => {
        try {
            if (user) {
                setLoading(true);
                await api.put('updateHeightWeight', {
                    id: user.student_id,
                    height: Number(altura) !== user.student_height ? Number(altura) : null,
                    actualWeight: Number(peso) !== user.student_actual_weight || Number(pesoDesejado) !== user.student_wished_weight ? Number(peso) : null,
                    wishedWeight: Number(peso) !== user.student_actual_weight || Number(pesoDesejado) !== user.student_wished_weight ? Number(pesoDesejado) : null,
                    objective: objective !== user.objective_id ? objective : null,
                });

                if (Number(altura) !== user.student_height) {
                    dispatch(updateUserHeight(Number(altura)));
                }
                if (Number(peso) !== user.student_actual_weight || Number(pesoDesejado) !== user.student_wished_weight) {
                    dispatch(updateUserWeight(Number(peso)));
                }
                if (Number(pesoDesejado) !== user.student_wished_weight) {
                    dispatch(updateUserWishedWeight(Number(pesoDesejado)));
                }
                if (objective !== user.objective_id) {
                    dispatch(updateUserObjective(objective));
                }

                Alert.alert('Salvo com sucesso');
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao Salvar', 'Por favor tente novamente');
            setLoading(false);
        }
    };

    return (
        <>
            {loading
                ?
                <LoadingScreen />
                :
                <SafeAreaView style={style.container}>
                    <MainHeader />
                    <View style={style.titleContainer}>
                        <View style={style.iconContainer}>
                            <Icon name="edit" size={units.vw * 4.8} color={colors.secondary} />
                        </View>
                        <Text style={style.tittle}>Informações de usuário</Text>
                    </View>
                    <View style={style.inputsContainer}>
                        <InputForm label="Altura (cm)" placeholder="0.00" value={altura} onChange={(e) => setAltura(e)} height />
                        <InputForm label="Peso (kg)" placeholder="0" value={peso} onChange={(e) => setPeso(e)} weight />
                        <InputForm label="Peso desejado (kg)" placeholder="0" value={pesoDesejado} onChange={(e) => setPesoDesejado(e)} weight />
                        <SelectForm label="Objetivo" items={[
                            { label: 'Perda de peso', value: 1 },
                            { label: 'Ganho de massa', value: 2 },
                        ]} value={objective} onChange={(e) => setObjective(e)} />
                    </View>
                    <LongButton title="Salvar" onPress={() => save()} />
                </SafeAreaView>
            }
        </>
    );
};


export default MeasurementsEdit;
