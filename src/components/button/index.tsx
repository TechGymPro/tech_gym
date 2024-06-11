import React from 'react';
import { TouchableOpacity, Text, DimensionValue, ActivityIndicator } from 'react-native';
import { units } from '../../hooks/hooks';
import { style } from './style';
import colors from '../../global/colors';

interface Props {
    type?: 'grey';
    title: string;
    customMarginBottom?: DimensionValue;
    onPress: Function;
    disabled?: boolean;
    academy?: boolean;
    loading?: boolean;
}

export const LongButton: React.FC<Props> = ({ title, customMarginBottom, onPress, disabled, academy, loading, type }) => {
    return (
        <>
            {
                type === 'grey' ? (
                    <TouchableOpacity
                        disabled={disabled || loading}
                        style={[disabled ? style.disabledGreyButton : style.button]}
                        onPress={() => onPress()}>
                        {!loading
                            ?
                            <Text style={style.buttonText}>{title}</Text >
                            :
                            <ActivityIndicator color={colors.secondary} size={'large'} />
                        }
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        disabled={disabled || loading}
                        style={[disabled ? style.disabledButton : style.button]}
                        onPress={() => onPress()}>
                        {!loading
                            ?
                            <Text style={style.buttonText}>{title}</Text >
                            :
                            <ActivityIndicator color={colors.secondary} size={'large'} />
                        }
                    </TouchableOpacity>
                )
            }
        </>
    );
};

export const ShortButton: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={style.shortButton} onPress={() => onPress()}>
            <Text style={style.shortButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};


export const SmallButton: React.FC<Props> = ({ title, onPress }) => {
    return (
        <>
            <TouchableOpacity
                style={style.smallButton}
                onPress={() => onPress()}
            >
                <Text style={style.buttonText}>{title}</Text >
            </TouchableOpacity>
        </>
    );
};

