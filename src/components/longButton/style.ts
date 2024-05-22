import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';


export const style = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '88%',
        height: 40,
        borderRadius: units.vh * 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    buttonSecondary: {
        backgroundColor: colors.primary,
        width: units.vw * 92,
        height: 40,
        borderRadius: units.vh * 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: units.vh * 38
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
        bottom: 0,
    },
    disabledButton: {
        backgroundColor: colors.disabledButton,
        width: '88%',
        height: 40,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    disabledButtonSecondary: {
        backgroundColor: colors.disabledButtonSecondary,
        width: units.vw * 92,
        height: 40,
        borderRadius: units.vh * 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: units.vh * 38
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Inter-Bold',
    },
    shortButtonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
        fontSize: 25,
    },
});
