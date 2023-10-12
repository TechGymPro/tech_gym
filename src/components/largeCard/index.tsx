import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../global/colors';
import Icon from 'react-native-vector-icons/Entypo';

interface Props {
    letter: string;
    title: string;
    onPress: Function;
}

export const LargeCard: React.FC<Props> = ({ letter, title, onPress }) => {
    return (
        <TouchableOpacity style={style.container} onPress={() => onPress()}>
            <Text style={style.letter}>{letter}</Text>
            <Text numberOfLines={1} style={style.trainingName}>{title}</Text>
            <Icon name="chevron-right" size={30} color={colors.darkBackground} />
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: 105,
        width: '88%',
        alignSelf: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '6%',
    },
    letter: {
        fontFamily: 'Montserrat',
        fontSize: 32,
        color: colors.mainTextColor,
    },
    trainingName: {
        fontFamily: 'Poppins Regular',
        fontSize: 16,
        color: colors.mainTextColor,
        width: '75%',
        marginLeft: '4%',
        paddingTop: '1%',
    },
});
