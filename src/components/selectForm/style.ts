import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: colors.inputFormBackground,
        height: units.vh * 7,
        paddingHorizontal: units.vh * 0.3,
        borderRadius: units.vh * 2,
        borderWidth: 1,
        borderColor: colors.greyBorderColor,
        fontSize: 16,
        color: colors.inputTextColor,
        fontFamily: 'Inter-Regular',
    },
    InputLabel: {
        fontSize: 16,
        color: colors.mainTextColor,
        paddingBottom: 6,
        marginLeft: 2,
        fontFamily: 'Inter-Medium',
    }
});
