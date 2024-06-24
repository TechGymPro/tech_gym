import { Text, View } from 'react-native';
import React, { useState } from 'react';
import TabButtons, { TabButtonType } from './tabbutons';
import { style } from './style';

interface TabViewProps {
    options: TabButtonType[];
    darkTheme?: boolean;
}
enum CustomTab {
    Tab1,
    Tab2,
    Tab3
}

const TabView: React.FC<TabViewProps> = ({ options, darkTheme }) => {
    const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);

    return (
        <>
            <TabButtons
                darkTheme
                options={options}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            <View style={style.measurementsContainer}>
                <Text style={darkTheme ?
                    [style.measurementsInfo, style.darkThemeText] :
                    style.measurementsInfo}
                >
                    {options[selectedTab].title}
                </Text>
                <Text style={darkTheme ? [style.measurementsInfo, style.darkThemeText] :
                    style.measurementsInfo}
                >
                    {options[selectedTab].value}
                </Text>
            </View>
        </>
    )
}

export default TabView;
