import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './style';

interface Props {
    onPress: Function;
    item: any;
}

export const SettingsCard: React.FC<Props> = ({ onPress, item }) => {
    return (
        <TouchableOpacity style={style.container} onPress={() => onPress()}>
            <View style={style.subContainer}>
                <View>
                    <Text style={style.tittle} numberOfLines={1}>{item.name}</Text>
                </View>
                <TouchableOpacity onPress={() => onPress}>
                    <Image source={require('../../assets/img/next-icon.png')} style={style.ico} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

