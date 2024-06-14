import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { style } from './style';
import LinearGradient from 'react-native-linear-gradient';
import TrainingIcon from '../trainingIcon';

interface TrainingCardProps {
    type: string;
    title: string;
    text: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, text, type }) => {
    return (
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.subtitle}>{text}</Text>
            </View>
            <TrainingIcon
                text={type}
            />
        </View>
    )
}

export default TrainingCard;