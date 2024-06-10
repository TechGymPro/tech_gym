import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { style } from './style';

interface Props {
    focused: boolean;
    iconName: 'home' | 'training' | 'data' | 'profile' | 'settings';
    size: number;
    label: string;
}

export const TabBarIconComponent: FC<Props> = ({ focused, size, iconName, label }) => {
    return focused ? (
        <View
            style={style.focusedContainer}>
            <Image
                source={
                    iconName === 'home'
                        ?
                        require('../../../assets/img/home-icon-selected.png')
                        :
                        iconName === 'training'
                            ?
                            require('../../../assets/img/training-icon-selected.png')
                            :
                            iconName === 'data'
                                ?
                                require('../../../assets/img/data-icon-selected.png')
                                :
                                iconName === 'profile'
                                    ?
                                    require('../../../assets/img/profile-icon-selected.png')
                                    :
                                    require('../../../assets/img/settings-icon-selected.png')
                }
                style={{ height: size * 1.15, width: size * 1.15 }}
            />
            <Text
                style={style.label}>
                {label}
            </Text>
        </View>
    ) : (
        <View
            style={style.blurContainer}>
            <Image
                source={
                    iconName === 'home'
                        ?
                        require('../../../assets/img/home-icon.png')
                        :
                        iconName === 'training'
                            ?
                            require('../../../assets/img/training-icon.png')
                            :
                            iconName === 'data'
                                ?
                                require('../../../assets/img/data-icon.png')
                                :
                                iconName === 'profile'
                                    ?
                                    require('../../../assets/img/profile-icon.png')
                                    :
                                    require('../../../assets/img/settings-icon.png')
                }
                style={{ height: size * 1.15, width: size * 1.15 }}
            />
        </View>
    );
};

