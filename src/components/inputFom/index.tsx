import React from 'react';
import { Text, TextInput, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import { maskOnlyNumbers } from '../../../utils/masks';

import colors from '../../global/colors';
import { style } from './style';

interface Props {
    label?: string;
    placeholder: string;
    secure?: boolean;
    onChange: (mask: string) => void;
    value: string;
    time?: boolean;
    height?: boolean;
    weight?: boolean;
    phone?: boolean;
    email?: boolean;
}

export const InputForm: React.FC<Props> = ({ label, placeholder, secure, onChange, value, time, height, weight, phone, email }) => {
    return (
        <View style={phone || email ? style.containerPhoneEmail : style.container}>
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
                        phone
                            ?
                            <>
                                <Text style={style.textDDI}>+55</Text>
                                <MaskInput
                                    keyboardType='numeric'
                                    value={value}
                                    onChangeText={(masked) => onChange(masked)}
                                    mask={Masks.BRL_PHONE}
                                    placeholderTextColor={colors.placeholderTextColor}
                                    style={style.input}
                                />
                            </>
                            :
                            email
                                ?
                                <>
                                    <MaskInput
                                        value={value}
                                        onChangeText={(masked) => onChange(masked)}
                                        placeholder={placeholder}
                                        placeholderTextColor={colors.placeholderTextColor}
                                        style={[style.input, style.textInput]}
                                    />
                                </>
                                :
                                <>
                                    <Text style={style.InputLabel}>{label}</Text>
                                    <TextInput secureTextEntry={secure} style={[style.input, style.textInput]} placeholder={placeholder} placeholderTextColor={colors.placeholderTextColor} value={value} onChangeText={(e) => onChange(e)} />
                                </>
            }
        </View>
    );
};
