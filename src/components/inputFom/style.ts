import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    containerPhoneEmail: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: colors.greyBorderColor,
        borderRadius: 12,
        backgroundColor: colors.inputFormBackground,
    },
    input: {
        height: 44,
        fontSize: 16,
        color: colors.titleTextColor,
        fontFamily: 'Inter-Regular',
        borderWidth: 1,
        borderColor: colors.greyBorderColor,
        borderRadius: 12,
        backgroundColor: colors.inputFormBackground,
    },
    InputLabel: {
        paddingLeft: '1%',
        paddingBottom: 8,
        fontSize: 16,
        color: colors.mainTextColor,
        fontFamily: 'Inter-Medium',
    },
    textDDI: {
        color: colors.placeholderTextColor,
        fontSize: 16,
    },
    textInput: {
        color: colors.mainTextColor
    }
});
