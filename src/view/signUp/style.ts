import { StyleSheet } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';

export const style = StyleSheet.create({
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
    imgBg: {
        flex: 2,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.85)'
    },
    logo: {
        alignSelf: 'center',
        marginTop: 90,
        width: units.vw * 70,
        height: units.vw * 30,
    },

    downScreenK: {
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        paddingTop: 30,
        bottom: 0,
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    welcomeContainer: {
        alignItems: 'center',
        height: '22%',
        justifyContent: 'center',
        marginBottom: 30,
    },
    bigWelcome: {
        color: colors.titleTextColor,
        fontSize: 32,
        fontFamily: 'Inter-ExtraBold',
    },
    smallWellcome: {
        color: colors.mainTextColor,
        fontSize: 16,
        fontFamily: 'Inter',
        marginTop: 5,
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

    inputContainer: {
        width: units.vw * 88,
        height: units.vh * 8,
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
