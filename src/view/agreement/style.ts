import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    textContainer: {
        height: units.vh * 40,
        paddingHorizontal: '5%',
        marginVertical: '5%',
        marginTop: units.vh * 6,
        marginBottom: units.vh * 8,
    },
    contract: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: colors.mainTextColor
    },
    text: {
        color: colors.subtitleTextColor,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        textAlign: 'left'
    },
    sheetTextTitle: {
        color: colors.subtitleTextColor,
        fontFamily: 'Inter-Bold',
        fontSize: 20,
    },
    errorMessage: {
        color: colors.errorColor
    }
});
