import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingBottom: 20,
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
