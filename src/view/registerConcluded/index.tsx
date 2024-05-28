import React from 'react';
import { SafeAreaView, StatusBar, Text, View, ImageBackground } from 'react-native';
import { useKeyboardVisible } from '../../hooks/hooks';
import { LongButton } from '../../components/longButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import LinearGradient from 'react-native-linear-gradient';


const RegisterConcluded = () => {
    const IsKeyboardOpen = useKeyboardVisible();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView style={IsKeyboardOpen ? style.containerK : style.containerWK}>
            <ImageBackground source={require('../../assets/img/woman-training.png')} style={style.imgBg}>
                <View style={style.containerGradient}>
                    <LinearGradient
                        colors={['transparent', 'rgba(255, 255, 255, 1)']}
                        style={style.linearGradient}
                    >
                    </LinearGradient>
                </View>
            </ImageBackground>
            <View style={style.signUpContainer}>
                <Text style={style.bigText}>Cadastro concluído</Text>
                <Text style={style.smallText}>
                    Agora você pode aproveitar todas as
                    vantagens para ficar mais saudável
                </Text>
            </View>

            <LongButton title={'Entrar'} onPress={() => navigation.navigate('InfosII')} />
            <StatusBar hidden />
        </SafeAreaView>
    );
};

export default RegisterConcluded;

