import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View, ActivityIndicator, ImageBackground } from 'react-native';
import { useAppDispatch, useAppSelector, useKeyboardVisible } from '../../hooks/hooks';
import colors from '../../global/colors';
import { LongButton } from '../../components/button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { isLoading } from '../../redux/authSlice';
import { InputForm } from '../../components/inputFom';


const SignUp = () => {
    const IsKeyboardOpen = useKeyboardVisible();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [invalidPhone, setInvalidPhone] = useState(true);
    const [phone, setPhone] = useState('');
    const loading = useAppSelector(isLoading);
    const dispatch = useAppDispatch();

    function alert() {
        console.log('Entrar pressed');
    }

    const handlePhoneChange = (value: string) => {
        setPhone(value);

        const isValid = phone.length >= 11;
        setInvalidPhone(!isValid);
    };


    return (
        <SafeAreaView style={IsKeyboardOpen ? style.containerK : style.containerWK}>
            <ImageBackground source={require('../../assets/img/manTraining-splashbg.jpg')} style={style.imgBg}>
                <View style={style.overlay}>
                    <Image source={require('../../assets/img/logo-transparentbg-big.png')} style={style.logo} />
                    <View style={style.downScreenK}>
                        <View style={style.welcomeContainer}>
                            <Text style={style.bigWelcome}>Bem-vindo</Text>
                            <Text style={style.smallWellcome}>Coloque seu número de telefone</Text>
                        </View>
                        <View style={style.inputContainer}>
                            <InputForm
                                placeholder="+55"
                                key={1}
                                phone
                                value={phone}
                                onChange={handlePhoneChange} />
                        </View>
                        < LongButton title={'Entrar'} disabled={invalidPhone} onPress={() => alert()} />
                    </View>
                </View>

            </ImageBackground>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
        </SafeAreaView>
    );
};

export default SignUp;

