import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';

interface Props {
    title: string;
    subtitle: string;
}

export const TitleAndSubtitleCard: React.FC<Props> = ({ title, subtitle }) => {

    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.subtitle}>{subtitle}</Text>
        </View>
    );
};


