import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../global/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { style } from '../../assets/fonts/style';

interface Props {
    subtitle: string;
    title: number;
    options: string[];
    onPress: () => void;
    disable: boolean;
    isActive: boolean;
    discount: boolean;
}

export const Card: React.FC<Props> = ({ subtitle, title, onPress, options, disable, discount }) => {
    return (
        <TouchableOpacity
            style={
                disable ? [style.container, style.inactiveBorder]
                    : [style.container, style.activeBorder]
            }
            onPress={onPress}
        >
            <View style={style.containerTitles}>
                <View>
                    <Text style={style.subtitle}>{subtitle}</Text>
                    <Text style={style.title}>R$ {title}</Text>
                </View>
                {discount && (
                    <View >
                        <Text style={[style.discountText, style.yellowFlag]} >Mais Popular</Text>
                        <Text style={[style.discountText, style.greenFlag]}>-15%</Text>
                    </View>
                )}
            </View>


            {options.map(option =>
            (
                <View style={style.optionsContainer}>
                    <Icon name="check" size={20} color={colors.darkBackground} />
                    <Text style={style.optionsText}>{option}</Text>
                </View>
            )
            )}
        </TouchableOpacity>
    );
};

