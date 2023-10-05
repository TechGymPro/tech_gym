import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
    customHeight?: number;
}

export const CardSeparator: React.FC<Props> = ({ customHeight }) => {
    return (
        <View style={customHeight ? { height: customHeight } : style.separate} />
    );
};

const style = StyleSheet.create({
    separate: {
        height: 30,
    },
});
