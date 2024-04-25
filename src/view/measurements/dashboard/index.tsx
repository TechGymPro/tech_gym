import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { MainHeader } from '../../../components/mainHeader';
import { ResizableWhiteCard } from '../../../components/resizableWhiteCard';
import colors from '../../../global/colors';
import { units, useAppSelector } from '../../../hooks/hooks';
import Icon from 'react-native-vector-icons/Feather';
import { Chart, Line, HorizontalAxis, Tooltip } from 'react-native-responsive-linechart';
import { LongButton } from '../../../components/longButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './style';
import { userData } from '../../../redux/authSlice';


const Measurements = () => {
    const user = useAppSelector(userData);

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
                        <Text style={style.targetSecondLine}>{user?.student_wished_weight} kg</Text>
                        {user?.objective_id === 1
                            ?
                            <Text
                                style={[style.targetThirdLine, { backgroundColor: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.goodGraph : colors.badGraph }]}>
                                {user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? '' : '+'}
                                {user && user.student_actual_weight && user.student_initial_weight ? (user.student_actual_weight - user.student_initial_weight).toFixed(2) : '0.00'} kg
                            </Text>
                            :
                            <Text
                                style={[style.targetThirdLine, { backgroundColor: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.badGraph : colors.goodGraph }]}>
                                {user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? '' : '+'}
                                {user && user.student_actual_weight && user.student_initial_weight ? (user.student_actual_weight - user.student_initial_weight).toFixed(2) : '0.00'} kg
                            </Text>
                        }
                    </View>
                }
            />
            <Text style={style.textDivider}>Evolução de peso</Text>
            <ResizableWhiteCard width="86%" height={units.vh * 29}
                children={
                    <View style={style.targetContainer}>
                        {user?.objective_id === 1
                            ?
                            <Text style={[style.chartText, { color: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.goodGraph : colors.badGraph }]}>{user && user.student_actual_weight ? user.student_actual_weight : '00'}  kg</Text>
                            :
                            <Text style={[style.chartText, { color: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.badGraph : colors.goodGraph }]}>{user && user.student_actual_weight ? user.student_actual_weight : '00'}  kg</Text>
                        }
                        {/* @ts-ignore: Unreachable code error */}
                        <Chart
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{ height: 200, width: '100%' }}
                            data={[
                                { x: 1, y: user && user.student_initial_weight ? user.student_initial_weight : 50 },
                                { x: 2, y: user && user.student_actual_weight ? user.student_actual_weight : 50 },
                            ]}
                            padding={{ left: 20, bottom: 20, right: 20, top: 20 }}
                            xDomain={{ min: 1, max: 2 }}
                            yDomain={{ min: 39, max: 120 }}
                        >
                            <HorizontalAxis tickCount={2} theme={{ ticks: { visible: false } }} />
                            {user?.objective_id === 1
                                ?
                                <Line theme={{ stroke: { color: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.goodGraph : colors.badGraph, width: 3 }, scatter: { default: { width: 10, height: 10, rx: 4, color: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.goodGraph : colors.badGraph }, selected: { color: colors.thirdColor } } }} tooltipComponent={<Tooltip theme={{ formatter: ({ y }) => y.toFixed(2) }} />} />
                                :
                                <Line theme={{ stroke: { color: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.badGraph : colors.goodGraph, width: 3 }, scatter: { default: { width: 10, height: 10, rx: 4, color: user && user.student_actual_weight && user.student_initial_weight && (user.student_actual_weight - user.student_initial_weight) < 0 ? colors.badGraph : colors.goodGraph }, selected: { color: colors.thirdColor } } }} tooltipComponent={<Tooltip theme={{ formatter: ({ y }) => y.toFixed(2) }} />} />
                            }
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
                            <Text style={style.infosDescription}>{user?.student_height}</Text>
                        </View>
                        <View>
                            <Text style={style.infosTitle}>Peso</Text>
                            <Text style={style.infosDescription}>{user?.student_actual_weight} kg</Text>
                        </View>
                        <View>
                            <Text style={style.infosTitle}>IMC</Text>
                            <Text style={style.infosDescription}>{(Number(user?.student_actual_weight) / (Number(user?.student_height) * Number(user?.student_height))).toFixed(1)}</Text>
                        </View>
                    </View>
                }
            />
            <LongButton title="Editar Informações" customMarginBottom={units.vh * 2.5} onPress={() => navigation.navigate('MeasurementsEdit')} />
        </SafeAreaView>
    );
};


export default Measurements;
