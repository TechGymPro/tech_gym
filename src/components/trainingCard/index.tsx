import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
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
