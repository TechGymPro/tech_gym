import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: units.vw * 26,
        maxHeight: units.vh * 8,
        borderRadius: units.vw * 4,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
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
    },
    linearGradient: {
        flex: 1
    }
})