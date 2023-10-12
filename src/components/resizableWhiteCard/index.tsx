/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';
import colors from '../../global/colors';

interface Props {
    width: DimensionValue;
    height: DimensionValue;
    marginTop?: DimensionValue;
    marginBottom?: DimensionValue;
    marginLeft?: DimensionValue;
    marginRight?: DimensionValue;
    children: React.JSX.Element;
    borderRadius?: number;
}


export const ResizableWhiteCard: React.FC<Props> = ({ height, width, children, marginBottom, marginLeft, marginRight, marginTop, borderRadius }) => {
    return (
        <View style={[style.container, { width: width, height: height, marginBottom: marginBottom ? marginBottom : 0, marginTop: marginTop ? marginTop : 0, marginLeft: marginLeft ? marginLeft : 0, marginRight: marginRight ? marginRight : 0, borderRadius: borderRadius ? borderRadius : 14 }]}>
            {children}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        alignSelf: 'center',
    },
});
