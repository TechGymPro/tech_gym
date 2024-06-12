import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useKeyboardVisible } from '../../hooks/hooks';
import { ShortButton } from '../../components/button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import LinearGradient from 'react-native-linear-gradient';


const InitialScreen = () => {
    const IsKeyboardOpen = useKeyboardVisible();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView style={IsKeyboardOpen ? style.containerK : style.containerWK}>
            <ImageBackground source={require('../../assets/img/manTraining-splashbg.jpg')} style={style.imgBg}>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,1)']}
                    style={style.linearGradient}
                >
                    <View style={style.container}>
                        <Image source={require('../../assets/img/logo-transparentbg-big.png')} style={style.logo} />
                        <Text style={style.bigText}>Sua saúde na palma da mão</Text>
                        <View style={style.buttonContainer}>
                            <ShortButton title={'Começar'} onPress={() => navigation.navigate('SignUp')} />
                            <View style={style.signUpContainer}>
                                <Text style={style.smallText}>Ainda não é aluno?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={style.signUpText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <StatusBar hidden />
        </SafeAreaView>
    );
};

export default InitialScreen;

