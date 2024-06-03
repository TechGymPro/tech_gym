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



// import React, { useState } from 'react';
// import { Dimensions, StyleSheet, Text, View } from 'react-native';

// import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
// import ListItem from 'react-native-dynamically-selected-picker';
// import colors from '../../global/colors';
// import { style } from './style';

// const WeightHeightPicker = ({ onChange, items, value }) => {
//     const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
//     const initialSelectedIndex = 25;

//     return (
//         <View style={style.container}>
//             <DynamicallySelectedPicker
//                 items={items}
//                 onScroll={(index) => setSelectedItemIndex(index)}
//                 onMomentumScrollBegin={(index) => setSelectedItemIndex(index)}
//                 onMomentumScrollEnd={(index) => setSelectedItemIndex(index)}
//                 onScrollBeginDrag={(index) => setSelectedItemIndex(index)}
//                 onScrollEndDrag={(index) => setSelectedItemIndex(index)}
//                 initialSelectedIndex={initialSelectedIndex}
//                 selectedItemBorderColor={colors.primary}
//                 transparentItemRows={4}
//                 fontSize={40}
//                 fontFamily={'Inter-Regular'}
//                 height={400}
//             />
//             <View style={style.selectedItemWrapper}>
//                 <Text>Selected item index {selectedItemIndex}</Text>
//             </View>
//         </View>
//     );
// }

// export default WeightHeightPicker;

