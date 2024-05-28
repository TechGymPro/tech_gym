import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: units.vw * 88,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    smallButton: {
        width: units.vh * 40,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSecondary: {
        backgroundColor: colors.primary,
        width: units.vw * 92,
        height: units.vh * 6,
        borderRadius: units.vh * 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: units.vh * 40
    },
    shortButton: {
        backgroundColor: colors.primary,
        width: '88%',
        height: 64,
        borderRadius: 32,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    disabledButton: {
        backgroundColor: colors.disabledButton,
        width: units.vw * 88,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledGreyButton: {
        backgroundColor: colors.disabledButtonSecondary,
        width: units.vw * 88,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    disabledButtonSecondary: {
        backgroundColor: colors.disabledButtonSecondary,
        width: units.vw * 92,
        height: units.vh * 6,
        borderRadius: units.vh * 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: units.vh * 40
    },
    buttonText: {
        fontSize: 16,
        color: colors.mainTextColor,
        fontFamily: 'Inter-ExtraBold'
    },
    shortButtonText: {
        fontSize: 25,
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium'
    },
});
