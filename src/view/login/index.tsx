import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector, useKeyboardVisible } from '../../hooks/hooks';
import colors from '../../global/colors';
import { InputForm } from '../../components/inputFom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { isLoading, login } from '../../redux/authSlice';


const Login = () => {
    const IsKeyboardOpen = useKeyboardVisible();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loading = useAppSelector(isLoading);
    const dispatch = useAppDispatch();

    const onLogin = async () => {
        dispatch(login({ email: email, password: password, navigation }));
    };

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
                    <InputForm placeholder="Email" label="Email" key={1} value={email} onChange={(e: string) => setEmail(e)} />
                    <InputForm placeholder="Senha" label="Senha" key={2} secure value={password} onChange={(e: string) => setPassword(e)} />
                </View>
                <TouchableOpacity style={style.loginButton} onPress={() => onLogin()}>
                    {loading
                        ?
                        <ActivityIndicator color="white" size="large" />
                        :
                        <Text style={style.buttonText}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
        </SafeAreaView>
    );
};

export default Login;

