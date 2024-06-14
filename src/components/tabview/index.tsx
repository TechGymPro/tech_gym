import { Text, View } from 'react-native';
import React, { useState } from 'react';
import TabButtons, { TabButtonType } from './tabbutons';
import { style } from './style';

enum CustomTab {
    Tab1,
    Tab2,
    Tab3
}

const TabView = () => {
    const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);

    const buttons: TabButtonType[] = [
        { title: 'Altura', value: '1.65 m' },
        { title: 'Peso', value: '70 Kg' },
        { title: 'IMC', value: 'valorIMC' },
    ]

    return (
        <>
            <TabButtons
                buttons={buttons}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            <View style={style.measurementsContainer}>
                <Text style={style.measurementsInfo}>{buttons[selectedTab].title}</Text>
                <Text style={style.measurementsInfo}>{buttons[selectedTab].value}</Text>
            </View>
        </>
    )
}

export default TabView;
