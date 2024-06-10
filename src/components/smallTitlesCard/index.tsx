import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { style } from './style';

interface Props {
    title: string;
    subtitle: string;
    onPress?: () => void;
    button?: boolean;
    onPressDisabled?: boolean;
}

export const SmallTitlesCard: React.FC<Props> = ({ title, subtitle, button, onPress, onPressDisabled }) => {
    return (
        <View style={style.container}>
            {onPressDisabled && (<Text style={style.title}>{title}</Text>)}
            {button
                ?
                <TouchableOpacity disabled={onPressDisabled} onPress={() => onPress ? onPress() : {}}>
                    {!onPressDisabled && (<Text style={style.subtitle}>{subtitle}</Text>)}
                </TouchableOpacity>
                :
                <Text style={style.subtitle}>{subtitle}</Text>
            }
        </View>
    );
};


