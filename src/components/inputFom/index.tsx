/* eslint-disable radix */
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';

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
    isNumber?: boolean;
    maxLength?: number;
    creditCard?: boolean;
    zipCode?: boolean;
    expireDate?: boolean;
    upperCase?: boolean;
}

export const InputForm: React.FC<Props> = ({
    expireDate,
    zipCode,
    label,
    placeholder,
    secure,
    onChange,
    value,
    time,
    height,
    weight,
    phone,
    email,
    isNumber,
    maxLength,
    creditCard,
    upperCase,
}) => {
    return (
        <View style={phone || email ? style.containerPhoneEmail : style.container}>
            {time
                ?
                <>
                    <Text style={style.InputLabel}>{label}</Text>
                    <MaskInput
                        maxLength={maxLength}
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
                            maxLength={maxLength}
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
                                maxLength={maxLength}
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
                                    maxLength={maxLength}
                                    keyboardType="numeric"
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
                                <MaskInput
                                    maxLength={maxLength}
                                    value={value}
                                    onChangeText={(masked) => onChange(masked)}
                                    placeholder={placeholder}
                                    placeholderTextColor={colors.placeholderTextColor}
                                    style={[style.input, style.textInput]}
                                />
                                :
                                isNumber
                                    ?
                                    <>
                                        <Text style={style.InputLabel}>{label}</Text>
                                        <TextInput
                                            maxLength={maxLength}
                                            keyboardType="number-pad"
                                            textContentType="telephoneNumber"
                                            secureTextEntry={secure}
                                            placeholder={placeholder}
                                            placeholderTextColor={colors.placeholderTextColor}
                                            value={value}
                                            style={[style.input, style.textInput]}
                                            onChangeText={(e) => onChange(e)}
                                        />
                                    </>
                                    :
                                    creditCard
                                        ?
                                        <>
                                            <Text style={style.InputLabel}>{label}</Text>
                                            <MaskInput
                                                maxLength={19}
                                                keyboardType="number-pad"
                                                textContentType="creditCardNumber"
                                                secureTextEntry={secure}
                                                placeholder={placeholder}
                                                placeholderTextColor={colors.placeholderTextColor}
                                                value={value}
                                                style={[style.input, style.textInput]}
                                                mask={Masks.CREDIT_CARD}
                                                onChangeText={(masked) => onChange(masked)}
                                            />
                                        </>
                                        :
                                        expireDate
                                            ?
                                            <>
                                                <Text style={style.InputLabel}>{label}</Text>
                                                <TextInput
                                                    maxLength={maxLength}
                                                    keyboardType="number-pad"
                                                    textContentType="creditCardNumber"
                                                    secureTextEntry={secure}
                                                    placeholder={placeholder}
                                                    placeholderTextColor={colors.placeholderTextColor}
                                                    value={value}
                                                    style={[style.input, style.textInput]}
                                                    onChangeText={(e) => {
                                                        let newValue = e.replace(/\D/g, '');
                                                        if (newValue.length >= 2) {
                                                            let month = newValue.slice(0, 2);
                                                            if (parseInt(month) > 12) {
                                                            }
                                                            if (newValue.length > 2) {
                                                                let year = newValue.slice(2, 4);
                                                                if (parseInt(year) > 40) {
                                                                    year = '40';
                                                                }
                                                                newValue = `${month}/${year}`;
                                                            } else {
                                                                newValue = month;
                                                            }
                                                        }

                                                        onChange(newValue);
                                                    }}
                                                />
                                            </>
                                            :
                                            zipCode
                                                ?
                                                <>
                                                    <Text style={style.InputLabel}>{label}</Text>
                                                    <MaskInput
                                                        maxLength={19}
                                                        keyboardType="number-pad"
                                                        textContentType="creditCardNumber"
                                                        secureTextEntry={secure}
                                                        placeholder={placeholder}
                                                        placeholderTextColor={colors.placeholderTextColor}
                                                        value={value}
                                                        style={[style.input, style.textInput]}
                                                        mask={Masks.CREDIT_CARD}
                                                        onChangeText={(masked) => onChange(masked)}
                                                    />
                                                </>
                                                :
                                                <>
                                                    <Text style={style.InputLabel}>{label}</Text>
                                                    <TextInput
                                                        maxLength={maxLength}
                                                        secureTextEntry={secure}
                                                        placeholder={placeholder}
                                                        placeholderTextColor={colors.placeholderTextColor}
                                                        value={value}
                                                        style={[style.input, style.textInput]}
                                                        onChangeText={(e) => upperCase ? onChange(e.toUpperCase()) : onChange(e)}
                                                    />
                                                </>
            }
        </View>
    );
};
