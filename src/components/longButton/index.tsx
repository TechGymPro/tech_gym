import React from 'react';
import { TouchableOpacity, Text, DimensionValue } from 'react-native';
import { units } from '../../hooks/hooks';
import { style } from './style';

interface Props {
    title: string;
    customMarginBottom?: DimensionValue;
    onPress: Function;
    disabled?: boolean;
}

export const LongButton: React.FC<Props> = ({ title, customMarginBottom, onPress, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} style={[disabled ? style.disabledButton : style.button, customMarginBottom ? { marginBottom: customMarginBottom } : { marginBottom: units.vh * 5 }]} onPress={()=>onPress()}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

