import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    cardsContainer: {
        gap: 8,
        marginTop: units.vh * 5,
        marginBottom: units.vh * 8,
    },
    errorMessage: {
        color: colors.errorColor
    }
});

