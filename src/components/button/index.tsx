import React from 'react';
import { TouchableOpacity, Text, DimensionValue, ActivityIndicator } from 'react-native';
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
    isBottom?: boolean;
}

export const LongButton: React.FC<Props> = ({ title, customMarginBottom, onPress, disabled, academy, loading, type, isBottom }) => {
    return (
        <>
            {
                type === 'grey' ? (
                    <TouchableOpacity
                        disabled={disabled || loading}
                        style={[disabled ? style.disabledGreyButton : isBottom ? style.buttonBottom : style.button]}
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
                        style={[disabled ? style.disabledButton : isBottom ? style.buttonBottom : style.button]}
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


export const SmallButton: React.FC<Props> = ({ type, title, onPress }) => {
    return (
        <>
            <TouchableOpacity
                style={type === 'grey' ? [style.smallButton, style.greyBackground] : style.smallButton}
                onPress={() => onPress()}
            >
                <Text style={style.buttonText}>{title}</Text >
            </TouchableOpacity>
        </>
    );
};

