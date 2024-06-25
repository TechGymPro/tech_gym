import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    button: {
        width: units.vw * 92,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,

    },
    buttonBottom: {
        width: units.vw * 92,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,

    },
    smallButton: {
        width: units.vh * 22,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    greyBackground: { backgroundColor: colors.greyBgColor },
    disabledGreyButton: {
        width: units.vw * 92,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.disabledButtonSecondary,
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
        width: units.vw * 92,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.disabledButton,
    },
    lightGreyButton: {
        width: units.vw * 90,
        height: units.vh * 6,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.greyBgColor,
    },
    lightGreyButtonText: {
        fontSize: 14,
        color: colors.titleTextColor,
        fontFamily: 'Inter-Bold'
    },
    buttonText: {
        fontSize: 16,
        color: colors.titleTextColor,
        fontFamily: 'Inter-Bold'
    },
    shortButtonText: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'Inter-Medium',
        color: colors.mainTextColor,
    },
    secondaryBgButton: {
        backgroundColor: colors.disabledButton,
    }
});
