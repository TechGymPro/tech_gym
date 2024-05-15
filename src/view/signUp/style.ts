import { StyleSheet } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    imgBg: {
        flex: 2,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.85)'
    },
    containerWK: {
        flex: 2,
        height: units.vh * 20,
        backgroundColor: colors.darkBackground,
    },
    containerK: {
        flex: 2,
        height: units.vh * 20,
        backgroundColor: colors.secondary,
    },
    upScreenWK: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '45%',
    },
    downScreenWK: {
        backgroundColor: colors.secondary,
        height: '56%',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    upScreenK: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '0%',
    },
    downScreenK: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 90,
        width: units.vw * 70,
        height: units.vw * 30,
    },
    bigText: {
        fontSize: 20,
        color: colors.lightTextColor,
        fontFamily: 'Poppins',
    },
    smallText: {
        fontSize: 16,
        color: colors.greyTextColor,
        fontFamily: 'Poppins',
    },
    textContainer: {
        alignItems: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        height: '22%',
        justifyContent: 'center',
    },
    bigWelcome: {
        color: colors.titleTextColor,
        fontSize: 32,
        fontFamily: 'Inter',
        fontWeight: '700'
    },
    smallWellcome: {
        color: colors.mainTextColor,
        fontSize: 14,
        fontFamily: 'Inter',
        marginTop: -5,
    },
    inputsContainer: {
        height: 145,
        justifyContent: 'space-between',
        marginBottom: units.vh * 5,
        marginTop: units.vh * 1,
    },
    loginButton: {
        alignSelf: 'center',
        width: units.vw * 42,
        backgroundColor: colors.primary,
        borderRadius: 4,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.lightTextColor,
        fontFamily: 'Garet Bold',
        fontSize: 18,
    },
});
