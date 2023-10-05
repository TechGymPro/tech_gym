import React from 'react';
import { StyleSheet, View } from 'react-native';


export const BottomOrTopSeparator = () => {
    return (
        <View style={style.separate} />
    );
};

const style = StyleSheet.create({
    separate: {
        height: 50,
    },
});
