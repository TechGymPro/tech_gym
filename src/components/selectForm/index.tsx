import React from 'react';
import { Text, View } from 'react-native';
import colors from '../../global/colors';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { style } from './style';

interface Props {
    label: string;
    items: Item[];
    onChange: (value: any) => void;
    value: number;
}

export const SelectForm: React.FC<Props> = ({ label, items, onChange, value }) => {
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
                    onValueChange={(e) => onChange(e)}
                    items={items}
                    value={value}
                />
            </View>
        </View>
    );
};


