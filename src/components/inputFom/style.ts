import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    containerPhone: {
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
        width: '100%',
        height: 44,
        fontSize: 16,
        color: colors.inputTextColor,
        fontFamily: 'Inter',
    },
    InputLabel: {
        fontSize: 16,
        color: colors.secondaryTextColor,
        paddingBottom: 6,
        marginLeft: 2,
        fontFamily: 'Inter',
    },
    textDDI: {
        color: colors.placeholderTextColor,
        fontSize: 16,
    },
});
