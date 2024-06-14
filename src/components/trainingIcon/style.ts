import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        width: units.vw * 28,
        height: units.vh * 8,
        borderRadius: units.vw * 4,
        overflow: 'hidden',
    },
    textContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        color: colors.primary
    },

    imgBg: {
        width: '100%',
        height: '100%',
        borderRadius: units.vh * 6,
        resizeMode: 'cover',
    },
    imgIcon: {
        width: 38,
        height: 38
    }
})