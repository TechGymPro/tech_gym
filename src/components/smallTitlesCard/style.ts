import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: units.vh * 4,
        alignItems: 'center',
        gap: 5,
    },
    title: {
        color: colors.titleTextColor,
        fontSize: 15,
        fontFamily: 'Inter-Medium',
    },
    subtitle: {
        color: colors.primary,
        fontSize: 15,
        fontFamily: 'Inter-Bold',
    },
});
