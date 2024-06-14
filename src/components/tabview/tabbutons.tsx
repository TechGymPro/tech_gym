import { Pressable, Text, View } from 'react-native';
import React from 'react';
import colors from '../../global/colors';
import { style } from './style';

export type TabButtonType = {
    title: string;
    value: string;
}

interface TabButtonsProps {
    buttons: TabButtonType[];
    selectedTab: number;
    setSelectedTab: (index: number) => void;
}


const TabButtons: React.FC<TabButtonsProps> = ({ buttons, selectedTab, setSelectedTab }) => {
    return (
        <View style={style.tabContainer}>
            <View style={style.optionContainer}>
                {buttons.map((button, index) => {
                    const bgColor = selectedTab === index ? colors.lightgreyBgColor : colors.greyBgColor;
                    return (
                        <Pressable
                            key={index}
                            style={[style.option, { backgroundColor: bgColor }]}
                            onPress={() => setSelectedTab(index)}
                        >
                            <Text style={style.optionText}>{button.title}</Text>
                        </Pressable>
                    )
                })}
            </View>
        </View>
    )
}

export default TabButtons;