import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: '5%',
    },
    hello: {
        color: colors.titleTextColor,
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: '700'
    },
    ico: {
        width: 24,
        height: 24,
    },
});
