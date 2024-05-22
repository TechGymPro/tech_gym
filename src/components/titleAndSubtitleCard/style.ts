import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingHorizontal: '5%',
        paddingBottom: 20
    },
    title: {
        color: colors.titleTextColor,
        fontFamily: 'Inter-Bold',
        fontSize: 28,
    },
    subtitle: {
        color: colors.subtitleTextColor,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
    },
});
