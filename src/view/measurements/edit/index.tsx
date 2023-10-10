import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MainHeader } from '../../../components/mainHeader';
import colors from '../../../global/colors';
import { units } from '../../../hooks/hooks';
import { InputForm } from '../../../components/inputFom';
import { LongButton } from '../../../components/longButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SelectForm } from '../../../components/selectForm';


const MeasurementsEdit = () => {
    return (
        <SafeAreaView style={style.container}>

            <MainHeader />
            <View style={style.titleContainer}>
                <View style={style.iconContainer}>
                    <Icon name="edit" size={20} color={colors.secondary} />
                </View>
                <Text style={style.tittle}>Informações de usuário</Text>
            </View>
            <View style={style.inputsContainer}>
                <InputForm label="Altura (cm)" placeholder="0.00" />
                <InputForm label="Peso (kg)" placeholder="0" />
                <InputForm label="Peso desejado (kg)" placeholder="0" />
                <SelectForm label="Objetivo" items={[
                    { label: 'Perda de peso', value: 'loss' },
                    { label: 'Ganho de massa', value: 'gain' },
                ]} />
            </View>
            <LongButton title="Salvar" onPress={() => { }} />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBackground,
        height: units.vh * 100,
    },
    iconContainer: {
        backgroundColor: colors.thirdColor,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40 / 2,
    },
    tittle: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        fontSize: 18,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '65%',
        alignSelf: 'center',
        marginTop: units.vh * 4,
        marginBottom: units.vh * 4,
    },
    inputsContainer: {
        height: units.vh * 35,
        justifyContent: 'space-between',
    },
});

export default MeasurementsEdit;
