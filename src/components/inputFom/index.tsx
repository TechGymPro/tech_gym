import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../global/colors';

interface Props {
    label: string;
    placeholder: string;
    secure?: boolean;
}

export const InputForm: React.FC<Props> = ({ label, placeholder, secure }) => {
    return (
        <View style={style.container}>
            <Text style={style.InputLabel}>{label}</Text>
            <TextInput secureTextEntry={secure} style={style.input} placeholder={placeholder} placeholderTextColor={colors.placeholderTextColor} />
        </View>
    );
};


const style = StyleSheet.create({
    container: {
        paddingHorizontal: '15%',
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        backgroundColor: colors.inputFormBackground,
        height: 44,
        borderRadius: 16,
        paddingHorizontal: 20,
        fontSize: 16,
        color: colors.inputTextColor,
        fontFamily: 'DMSans',
    },
    InputLabel: {
        fontSize: 12,
        color: colors.secondaryTextColor,
        paddingBottom: 6,
        marginLeft: 2,
        fontFamily: 'DMSans',
    },
    text: {

    },
});
