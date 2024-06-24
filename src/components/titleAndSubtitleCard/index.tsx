import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';

interface Props {
    title?: string;
    subtitle?: string;
    marginCustom?: boolean;
}

export const TitleAndSubtitleCard: React.FC<Props> = ({ title, subtitle, marginCustom }) => {

    return (
        <View style={
            marginCustom ? [style.container, style.marginCustom]
                : style.container}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.subtitle}>{subtitle}</Text>
        </View>
    );
};
