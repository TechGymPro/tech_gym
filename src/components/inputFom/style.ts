import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: '15%',
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        backgroundColor: colors.inputFormBackground,
        height: 44,
        borderRadius: 16,
        paddingHorizontal: 20,
        fontSize: 16,
        color: colors.inputTextColor,
        fontFamily: 'DMSans',
    },
    InputLabel: {
        fontSize: 12,
        color: colors.secondaryTextColor,
        paddingBottom: 6,
        marginLeft: 2,
        fontFamily: 'DMSans',
    },
    text: {

    },
});
