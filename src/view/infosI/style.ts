import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    inputContainer: {
        paddingHorizontal: '5%',
        marginTop: units.vh * 4,
        gap: units.vh * 2
    },
    errorMessage: {
        color: colors.errorColor
    }
});

