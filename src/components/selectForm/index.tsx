import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../global/colors';
import RNPickerSelect, { Item } from 'react-native-picker-select';

interface Props {
    label: string;
    items: Item[];
}

export const SelectForm: React.FC<Props> = ({ label, items }) => {
    return (
        <View style={style.container}>
            <Text style={style.InputLabel}>{label}</Text>
            <View style={style.input}>
                <RNPickerSelect
                    style={{
                        viewContainer: {height: '100%', justifyContent:'center', width: '100%'},
                        placeholder: { color: colors.placeholderTextColor },
                        inputIOS: { color: colors.mainTextColor, marginLeft: -12 },
                        inputAndroid: { color: colors.mainTextColor, marginLeft: -12  },
                    }}
                    placeholder={{
                        label: 'Selectione uma opção',
                        color: colors.thirdColor,
                        value: null,
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={items}
                />
            </View>
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
