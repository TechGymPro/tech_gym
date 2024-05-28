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
        borderRadius: units.vw * 2,
        backgroundColor: colors.inputFormBackground,
    },
    input: {
        flex: 1,
        height: units.vh * 7,
        fontSize: 18,
        color: colors.titleTextColor,
        fontFamily: 'Inter-Regular',
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
        fontSize: 18,
    },
    textInput: {
        color: colors.mainTextColor,
        paddingLeft: 10,
    },
});
