import { Pressable, Text, View } from 'react-native';
import React from 'react';
import colors from '../../global/colors';
import { style } from './style';

export type TabButtonType = {
    title: string;
    value: string | number;
}

interface TabButtonsProps {
    darkTheme?: boolean;
    options: TabButtonType[];
    selectedTab: number;
    setSelectedTab: (index: number) => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ options, selectedTab, setSelectedTab, darkTheme }) => {
    return (
        <View style={darkTheme ? [style.tabContainer, style.darkTheme] : style.tabContainer}>
            <View style={style.optionContainer}>
                {options.map((option, index) => {
                    let bgColor: string;
                    let txtColor: string;
                    if ((selectedTab === index) && darkTheme) {
                        bgColor = colors.disabledButton
                        txtColor = colors.titleTextColor
                    } else {
                        bgColor = colors.lightgreyBgColor
                        txtColor = colors.thirdColor
                    }

                    return (
                        <Pressable
                            key={index}
                            style={[style.option, { backgroundColor: bgColor }]}
                            onPress={() => setSelectedTab(index)}
                        >
                            <Text style={[style.optionText, { color: txtColor }]}>{option.title}</Text>
                        </Pressable>
                    )
                })}
            </View>
        </View>
    )
}

export default TabButtons;
