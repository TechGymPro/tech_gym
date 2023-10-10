import React from 'react';
import { TouchableOpacity, Text, StyleSheet, DimensionValue } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

interface Props {
    title: string;
    customMarginBottom?: DimensionValue;
    onPress: Function;
    disabled?: boolean;
}

export const LongButton: React.FC<Props> = ({ title, customMarginBottom, onPress, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} style={[disabled ? style.disabledButton : style.button, customMarginBottom ? { marginBottom: customMarginBottom } : { marginBottom: units.vh * 8 }]} onPress={()=>onPress()}>
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
    },
    disabledButton: {
        backgroundColor: colors.placeholderTextColor,
        width: '88%',
        height: 40,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
    },
});
