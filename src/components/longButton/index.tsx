import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

interface Props {
    title: string;
}

export const LongButton: React.FC<Props> = ({ title}) => {
    return (
        <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '88%',
        height: 40,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: units.vh * 8,
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
    },
});
