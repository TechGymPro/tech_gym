import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: units.vw * 88,
        height: 48,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
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
        width: units.vw * 88,
        height: 48,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    buttonText: {
        fontSize: 16,
        color: colors.mainTextColor,
        fontFamily: 'Inter-Bold',
    },
    shortButtonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
        fontSize: 25,
        marginTop: 5,
    },
});
