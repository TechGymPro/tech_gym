import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '../../global/colors';
import Icon from 'react-native-vector-icons/Entypo';
import { style } from './style';

interface Props {
    letter: string;
    title: string;
    onPress: Function;
}

export const LargeCard: React.FC<Props> = ({ letter, title, onPress }) => {
    console.log({title, letter})
    return (
        <TouchableOpacity style={style.container} onPress={() => onPress()}>
            <Text style={style.letter}>{letter}</Text>
            <Text numberOfLines={1} style={style.trainingName}>{title}</Text>
            <Icon name="chevron-right" size={30} color={colors.darkBackground} />
        </TouchableOpacity>
    );
};

