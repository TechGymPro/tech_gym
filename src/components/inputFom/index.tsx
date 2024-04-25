import React from 'react';
import { Text, TextInput, View } from 'react-native';
import colors from '../../global/colors';
import { style } from './style';
import MaskInput, { Masks } from 'react-native-mask-input';

interface Props {
    label: string;
    placeholder: string;
    secure?: boolean;
    onChange: (value: string) => void;
    value: string;
    time?: boolean;
    height?: boolean;
    weight?: boolean;
}

export const InputForm: React.FC<Props> = ({ label, placeholder, secure, onChange, value, time, height, weight }) => {
    return (
        <View style={style.container}>
            {time
                ?
                <>
                    <Text style={style.InputLabel}>{label}</Text>
                    <MaskInput
                        value={value}
                        onChangeText={(masked) => onChange(masked)}
                        mask={Masks.DATE_DDMMYYYY}
                        placeholder={placeholder}
                        placeholderTextColor={colors.placeholderTextColor}
                        style={style.input}
                    />

                </>
                :
                height
                    ?
                    <>
                        <Text style={style.InputLabel}>{label}</Text>
                        <MaskInput
                            value={value}
                            onChangeText={(masked) => onChange(masked)}
                            mask={[/\d/, '.', /\d/, /\d/]}
                            placeholder={placeholder}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={style.input}
                        />
                    </>
                    :
                    weight
                        ?
                        <>
                            <Text style={style.InputLabel}>{label}</Text>
                            <MaskInput
                                value={value}
                                onChangeText={(masked) => onChange(masked)}
                                mask={[/\d/, /\d/, '.', /\d/]}
                                placeholder={placeholder}
                                placeholderTextColor={colors.placeholderTextColor}
                                style={style.input}
                            />
                        </>
                        :
                        <>
                            <Text style={style.InputLabel}>{label}</Text>
                            <TextInput secureTextEntry={secure} style={style.input} placeholder={placeholder} placeholderTextColor={colors.placeholderTextColor} value={value} onChangeText={(e) => onChange(e)} />
                        </>
            }
        </View>
    );
};


