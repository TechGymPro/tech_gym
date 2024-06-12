import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        width: units.vw * 95,
        height: units.vh * 12,
        borderRadius: 20,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '8%',
        paddingVertical: '5%',

    },
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: colors.primary
    },
    subtitle: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.subtitleSecondary
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