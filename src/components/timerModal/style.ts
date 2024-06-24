import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackgroundOpacity,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerContainer: {
        width: units.vw * 85,
        flexDirection: 'row',
        gap: 20,
        marginTop: units.vh * 4
    },
    buttonClose: {
        alignSelf: 'flex-start',
    },
    counterText: {
        fontFamily: 'Inter-Regular',
        alignSelf: 'center',
        fontSize: 14,
        color: colors.mainTextColor,
        borderRadius: units.vh * 12
    },
    subContainer: {
        flex: 1,
        width: units.vw * 60,
        height: units.vh * 16,
        alignItems: 'center',
        borderRadius: units.vh * 12
    },
    timerText: {
        width: units.vw * 38,
        marginBottom: units.vh * 2,
        paddingHorizontal: '10%',
        paddingVertical: '10%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        backgroundColor: colors.greyBgColor,
        color: colors.mainTextColor,
    },
    restButton: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: units.vw * 8,
        backgroundColor: 'rgba(251, 186, 0, 0.9)',
    },
    midButtonText: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: colors.mainTextColor,
    },
    imageBackground: {
        width: units.vw * 85,
        height: units.vh * 7,
        marginTop: units.vh * 8,
        marginBottom: units.vh * 8,
    },
});
