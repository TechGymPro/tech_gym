import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    button: {
        width: units.vw * 88,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,

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
        width: units.vw * 90,
        height: units.vh * 8,
        borderRadius: units.vh * 3,
        marginBottom: units.vh * 4,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    disabledButton: {
        width: units.vw * 88,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.disabledButton,
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
        bottom: 0,
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
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'Poppins-Medium',
        color: colors.mainTextColor,
    },
});
