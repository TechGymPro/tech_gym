import React from 'react';
import { style } from './style';
import { Text, View } from 'react-native';
import colors from '../../global/colors';
import ScrollPicker from 'react-native-wheel-scrollview-picker';


interface WeightHeightPickerProps {
    dataSource: number[];
    value: number;
    onChange: (value: number) => void;
    dimension: 'Kg' | 'cm'
}

export const WeightHeightPicker: React.FC<WeightHeightPickerProps> = ({ dataSource, value, onChange, dimension }) => {

    return (
        <View style={style.container}>
            <ScrollPicker
                selectedIndex={value}
                dataSource={dataSource}
                renderItem={(data, index, isSelected) => {
                    return (

                        <View style={style.itemContainer}>
                            <Text style={isSelected ? style.text : style.unselectedText}>
                                {data} {dimension}
                            </Text>
                        </View>
                    );
                }}
                onValueChange={(data, selectedIndex) => {
                    onChange(selectedIndex);
                }}
                wrapperHeight={250}
                wrapperBackground={colors.pickerBackground}
                itemHeight={52}
                highlightColor={colors.primary}
                highlightBorderWidth={3}
                activeItemTextStyle={style.text}
            />
        </View>

    )
};
