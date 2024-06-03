import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    card: {
        paddingHorizontal: '5%',
        marginTop: units.vh * 4,
        marginBottom: units.vh * 10,
        gap: units.vh * 2
    },
    smallInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    smallInput: {
        width: units.vw * 42
    },
    errorMessage: {
        color: colors.errorColor
    }
});

