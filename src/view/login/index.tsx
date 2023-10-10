import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { units, useKeyboardVisible } from '../../hooks/hooks';
import colors from '../../global/colors';
import { InputForm } from '../../components/inputFom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const Login = () => {
    const IsKeyboardOpen = useKeyboardVisible();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView style={IsKeyboardOpen ? style.containerK : style.containerWK}>
            <View style={IsKeyboardOpen ? style.upScreenK : style.upScreenWK}>
                <Image source={require('../../assets/img/logo.png')} style={style.logo} />
                <View style={style.textContainer}>
                    <Text style={style.bigText}>Tech Gym, Inc.</Text>
                    <Text style={style.smallText}>Ser Tech é fácil.</Text>
                </View>
            </View>
            <View style={IsKeyboardOpen ? style.downScreenK : style.downScreenWK}>
                <View style={style.welcomeContainer}>
                    <Text style={style.bigWelcome}>Bem-vindo</Text>
                    <Text style={style.smallWellcome}>Faça login para continuar</Text>
                </View>
                <View style={style.inputsContainer}>
                    <InputForm placeholder="Email" label="Email" key={1} />
                    <InputForm placeholder="Senha" label="Senha" key={2} secure />
                </View>
                <TouchableOpacity style={style.loginButton} onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
        </SafeAreaView>
    );
};

export default Login;

const style = StyleSheet.create({
    containerWK: {
        height: units.vh * 100,
        backgroundColor: colors.darkBackground,
    },
    containerK: {
        height: units.vh * 100,
        backgroundColor: colors.secondary,
    },
    upScreenWK: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '45%',
    },
    downScreenWK: {
        backgroundColor: colors.secondary,
        height: '56%',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    upScreenK: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '0%',
    },
    downScreenK: {
        backgroundColor: colors.secondary,
        height: '52%',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    logo: {
        width: units.vw * 90,
        height: units.vw * 30,
    },
    bigText: {
        fontSize: 30,
        color: colors.lightTextColor,
        fontFamily: 'Garet Bold',
    },
    smallText: {
        fontSize: 14,
        color: colors.lightTextColor,
        fontFamily: 'DMSans',
    },
    textContainer: {
        alignItems: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        height: '22%',
        justifyContent: 'center',
    },
    bigWelcome: {
        color: colors.mainTextColor,
        fontSize: 44,
        fontFamily: 'Garet Bold',
    },
    smallWellcome: {
        color: colors.subtextColor,
        fontSize: 14,
        fontFamily: 'DMSans',
        marginTop: -5,
    },
    inputsContainer: {
        height: 145,
        justifyContent: 'space-between',
        marginBottom: units.vh * 5,
        marginTop: units.vh * 1,
    },
    loginButton: {
        alignSelf: 'center',
        width: units.vw * 42,
        backgroundColor: colors.primary,
        borderRadius: 4,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.lightTextColor,
        fontFamily: 'Garet Bold',
        fontSize: 18,
    },
});
