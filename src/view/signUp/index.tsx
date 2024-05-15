import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View, ActivityIndicator, ImageBackground } from 'react-native';
import { useAppDispatch, useAppSelector, useKeyboardVisible } from '../../hooks/hooks';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { isLoading, login } from '../../redux/authSlice';
import { InputForm } from '../../components/inputFom';


const SignUp = () => {
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
            <ImageBackground source={require('../../assets/img/manTraining-splashbg.jpg')} style={style.imgBg}>
                <View style={style.overlay}>
                    <Image source={require('../../assets/img/logo-transparentbg.png')} style={style.logo} />
                    <View style={style.downScreenK}>
                        <View style={style.welcomeContainer}>
                            <Text style={style.bigWelcome}>Bem-vindo</Text>
                            <Text style={style.smallWellcome}>Coloque seu número de telefone</Text>
                        </View>
                        <View style={style.inputsContainer}>
                            <InputForm placeholder="Senha" label="Senha" key={2} secure value={password} onChange={(e: string) => setPassword(e)} />
                        </View>
                        <LongButton title={'Entrar'} onPress={() => onLogin()} />
                    </View>
                </View>

            </ImageBackground>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
        </SafeAreaView>
    );
};

export default SignUp;

