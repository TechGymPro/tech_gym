import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, View, ImageBackground } from 'react-native';
import { useAppDispatch, useAppSelector, useKeyboardVisible } from '../../hooks/hooks';
import colors from '../../global/colors';
import { LongButton } from '../../components/button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { isLoading, sendPhoneToken, updateUserPhone, userData } from '../../redux/authSlice';
import { InputForm } from '../../components/inputFom';


const SignUp = () => {
    const IsKeyboardOpen = useKeyboardVisible();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [invalidPhone, setInvalidPhone] = useState(true);
    const loading = useAppSelector(isLoading);
    const { student_phone } = useAppSelector(userData);
    const dispatch = useAppDispatch();

    function sendPhone() {
        dispatch(sendPhoneToken({ phone: student_phone }))
            .then((response: any) => {
                if (response.payload.data.response === 200) {
                    navigation.navigate('VerifyPhone');
                }
            });
    }

    const handlePhoneChange = (value: string) => {
        dispatch(updateUserPhone(value));

        const isValid = value.length === 15;
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
                                maxLength={15}
                                key={1}
                                phone
                                value={student_phone}
                                onChange={handlePhoneChange} />
                        </View>
                        < LongButton title={'Entrar'} disabled={invalidPhone} onPress={() => sendPhone()} loading={loading} />
                    </View>
                </View>

            </ImageBackground>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
        </SafeAreaView>
    );
};

export default SignUp;

