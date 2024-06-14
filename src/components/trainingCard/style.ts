import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: units.vw * 85,
        paddingHorizontal: '6%',
        paddingVertical: '4%',
        marginTop: 12,
        borderRadius: units.vw * 4,
        backgroundColor: colors.subtitleSecondary,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
    },
    textContainer: {
        maxWidth: units.vw * 50,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: colors.titleTextColor
    },
    subtitle: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.thirdColor
    }
})