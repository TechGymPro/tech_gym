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
    button: {
        backgroundColor: colors.primary,
        height: 50,
        width: '60%',
        borderRadius: 15,
        marginBottom: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1%',
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        fontSize: 20,
    },
    restButton: {
        width: units.vw * 85,
        height: units.vh * 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: units.vh * 8,
        marginBottom: units.vh * 8,
        borderRadius: units.vw * 8,
        backgroundColor: colors.primary,
    },
    midButtonText: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: colors.mainTextColor,
    },
});
