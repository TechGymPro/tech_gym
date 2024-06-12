import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { style } from './style';
import LinearGradient from 'react-native-linear-gradient';

interface DataCardProps {
    title: string;
    data?: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, data }) => {
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../../assets/img/measurements-bg.jpg')}
                style={style.imgBg}

            >
                <LinearGradient
                    style={{ flex: 1 }}
                    colors={['rgba(0, 0, 0, 0.8)', 'rgba(0,0,0,0.8)']}
                >
                    <View style={style.textContainer}>
                        <View>
                            <Text style={style.title}>{title}</Text>
                            <Text style={style.subtitle}>{data}</Text>
                        </View>
                        <Image
                            style={style.imgIcon}
                            source={require('../../assets/img/data-icon-yellow.png')}
                        />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

export default DataCard;