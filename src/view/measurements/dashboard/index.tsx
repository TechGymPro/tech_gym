import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { MainHeader } from '../../../components/mainHeader';
import { ResizableWhiteCard } from '../../../components/resizableWhiteCard';
import colors from '../../../global/colors';
import { units } from '../../../hooks/hooks';
import Icon from 'react-native-vector-icons/Feather';
import { Chart, Line, HorizontalAxis, Tooltip } from 'react-native-responsive-linechart';
import { LongButton } from '../../../components/longButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const Measurements = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <SafeAreaView style={style.container}>
            <MainHeader />
            <ResizableWhiteCard width="86%" height={units.vh * 20} marginTop={24}
                children={
                    <View style={style.targetContainer}>
                        <View style={style.targetFirstLine}>
                            <Icon name="target" size={42} color={colors.thirdColor} />
                            <Text style={style.textFirstLine}>Objetivo de peso</Text>
                        </View>
                        <Text style={style.targetSecondLine}>68 kg</Text>
                        <Text style={style.targetThirdLine}>+35,89%</Text>
                    </View>
                }
            />
            <Text style={style.textDivider}>Evolução de peso</Text>
            <ResizableWhiteCard width="86%" height={units.vh * 27}
                children={
                    <View style={style.targetContainer}>
                        <Text style={style.chartText}>91 kg</Text>
                        {/* @ts-ignore: Unreachable code error */}
                        <Chart
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{ height: 200, width: '100%' }}
                            data={[
                                { x: 1, y: 68 },
                                { x: 2, y: 69 },
                                { x: 3, y: 70 },
                                { x: 4, y: 67 },
                                { x: 5, y: 63 },
                                { x: 6, y: 69 },
                                { x: 7, y: 72 },
                                { x: 8, y: 76 },
                                { x: 9, y: 79 },
                                { x: 10, y: 80.5 },
                                { x: 11, y: 81 },
                                { x: 12, y: 91 },
                            ]}
                            padding={{ left: 20, bottom: 20, right: 20, top: 20 }}
                            xDomain={{ min: 1, max: 12 }}
                            yDomain={{ min: 39, max: 120 }}
                        >
                            {/* <VerticalAxis tickCount={10} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} /> */}
                            <HorizontalAxis tickCount={12} theme={{ ticks: { visible: false } }} />
                            {/* <Area theme={{ gradient: { from: { color: colors.badGraph }, to: { color: colors.badGraph, opacity: 0.2 } } }} /> */}
                            <Line theme={{ stroke: { color: colors.badGraph, width: 3 }, scatter: { default: { width: 10, height: 10, rx: 4, color: colors.badGraph }, selected: { color: colors.thirdColor } } }} tooltipComponent={<Tooltip theme={{ formatter: ({ y }) => y.toFixed(2) }} />} />
                        </Chart>
                    </View>
                }
            />
            <ResizableWhiteCard width="86%" height={units.vh * 13} marginTop={22}
                children={
                    <View style={style.infosContainer}>
                        <Image source={require('../../../assets/img/fitness-ico.png')} style={style.ico} />
                        <View>
                            <Text style={style.infosTitle}>Altura</Text>
                            <Text style={style.infosDescription}>1.76 cm</Text>
                        </View>
                        <View>
                            <Text style={style.infosTitle}>Peso</Text>
                            <Text style={style.infosDescription}>81 kg</Text>
                        </View>
                        <View>
                            <Text style={style.infosTitle}>IMC</Text>
                            <Text style={style.infosDescription}>26,15</Text>
                        </View>
                    </View>
                }
            />
            <LongButton title="Editar Informações" customMarginBottom={units.vh * 6} onPress={()=>navigation.navigate('MeasurementsEdit')}/>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBackground,
    },
    targetContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    targetFirstLine: {
        flexDirection: 'row',
        paddingLeft: '6%',
        alignItems: 'center',
        marginTop: -12,
    },
    textFirstLine: {
        marginLeft: '2%',
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        fontSize: 17,
    },
    targetSecondLine: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        alignSelf: 'center',
        fontSize: 30,
        marginBottom: '3%',
    },
    targetThirdLine: {
        color: colors.secondary,
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',
        fontSize: 16,
        backgroundColor: colors.badGraph,
        padding: '1%',
        borderRadius: 5,
    },
    textDivider: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
        width: '86%',
        alignSelf: 'center',
        marginVertical: '4%',
        fontSize: 15,
    },
    chartText: {
        fontFamily: 'Montserrat',
        color: colors.badGraph,
        alignSelf: 'flex-end',
        marginRight: 20,
        fontSize: 16,
    },
    ico: {
        width: 60,
        height: 60,
    },
    infosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: '10%',
    },
    infosTitle: {
        fontFamily: 'Montserrat',
        color: colors.mainTextColor,
    },
    infosDescription: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
    },
});

export default Measurements;
