import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector, useKeyboardVisible } from '../../hooks/hooks';
import colors from '../../global/colors';
import { ShortButton } from '../../components/longButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { isLoading, login } from '../../redux/authSlice';


const InitialScreen = () => {
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
            <View>
                <View>
                    <Image source={require('../../assets/img/logo.png')} style={style.logo} />
                    <Text style={style.bigText}>Sua saúde na palma da mão</Text>
                </View>
                <View>
                    <ShortButton title={'Começar'} onPress={() => onLogin()} />
                    <Text style={style.smallText}>Ainda não é aluno?</Text>
                </View>
            </View>
            <Image source={require('../../assets/img/manTraining-splashbg.jpg')} style={style.imgBg} />
            <StatusBar barStyle={'light-content'} backgroundColor={colors.darkBackground} />
        </SafeAreaView>
    );
};

export default InitialScreen;

