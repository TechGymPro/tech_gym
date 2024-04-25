import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '88%',
        height: 40,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    disabledButton: {
        backgroundColor: colors.placeholderTextColor,
        width: '88%',
        height: 40,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
    },
});
