import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { style } from './style';
import LinearGradient from 'react-native-linear-gradient';

interface TrainingIconProps {
    text: string;
}

const TrainingIcon: React.FC<TrainingIconProps> = ({ text }) => {
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../../assets/img/training-icon-bg.jpg')}
                style={style.imgBg}
            >
                <LinearGradient
                    style={{ flex: 1 }}
                    colors={['rgba(0, 0, 0, 0.8)', 'rgba(0,0,0,0.8)']}
                >
                    <View style={style.textContainer}>
                        <Text style={style.title}>{text}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

export default TrainingIcon;