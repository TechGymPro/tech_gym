import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: colors.modalgroundOpacity,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        height: units.vh * 12,
        backgroundColor: colors.secondary,
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
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
    errorMessage: {
        color: colors.errorColor
    }
});

