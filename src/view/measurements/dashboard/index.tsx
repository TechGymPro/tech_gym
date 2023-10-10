import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainHeader } from '../../../components/mainHeader';
import { ResizableWhiteCard } from '../../../components/resizableWhiteCard';
import colors from '../../../global/colors';
import { units } from '../../../hooks/hooks';
import Icon from 'react-native-vector-icons/Feather';


const Measurements = () => {
    return (
        <View style={style.container}>
            <MainHeader />
            <ResizableWhiteCard width="86%" height={units.vh * 20} marginTop={24}
                children={
                    <View style={style.targetContainer}>
                        <View style={style.targetFirstLine}>
                            <Icon name="target" size={42} color={colors.thirdColor} />
                            <Text style={style.textFirstLine}>Objetivo de peso</Text>
                        </View>
                        <Text style={style.targetSecondLine}>68 kg</Text>
                        <Text style={style.targetThirdLine}>-35,89%</Text>
                    </View>
                }
            />
            <Text style={style.textDivider}>Evolução de peso</Text>
            <ResizableWhiteCard width="86%" height={units.vh * 27}
                children={
                    <View style={style.targetContainer}>
                        <View style={style.targetFirstLine}>
                            <Icon name="target" size={42} color={colors.thirdColor} />
                            <Text style={style.textFirstLine}>Objetivo de peso</Text>
                        </View>
                        <Text style={style.targetSecondLine}>68 kg</Text>
                        <Text style={style.targetThirdLine}>-35,89%</Text>
                    </View>
                }
            />
        </View>
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
        backgroundColor: colors.goodGraph,
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
});

export default Measurements;
