import React from 'react';
import { View } from 'react-native';
import { style } from './style';

interface Props {
    customHeight?: number;
}

export const CardSeparator: React.FC<Props> = ({ customHeight }) => {
    return (
        <View style={customHeight ? { height: customHeight } : style.separate} />
    );
};

