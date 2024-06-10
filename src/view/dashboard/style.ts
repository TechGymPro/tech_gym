import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    image: {
        height: '27%',
        width: '100%',
        resizeMode: 'cover',
    },
    grid: {
        paddingHorizontal: '10%',
    },
    wrapper: {
        justifyContent: 'space-between',
    },
});

