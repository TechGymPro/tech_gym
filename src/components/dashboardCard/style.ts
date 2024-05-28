import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: units.vw * 34,
        width: units.vw * 34,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '8%',
    },
    icoTraining: {
        width: '60%',
        height: units.vw * 9.5,
        marginTop: 10,
    },
    ico: {
        width: units.vw * 13,
        height: units.vw * 13,
    },
    text: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins Regular',
        fontSize: 14,
    },
});
