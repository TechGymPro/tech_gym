import { StyleSheet } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    containerWK: {
        flex: 1,
    },
    containerK: {
        flex: 1,
        height: units.vh * 100,
        backgroundColor: colors.secondary,
    },
    linearGradient: {
        flex: 1,
        height: units.vh * 20,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: units.vh * 50,
        alignItems: 'center',
        paddingTop: 50,
        rowGap: 80
    },
    buttonContainer: {
        alignItems: 'center',
        paddingTop: 40
    },
    imgBg: {
        flex: 1,
    },
    logo: {
        width: units.vw * 90,
        height: units.vw * 30,
    },
    bigText: {
        alignSelf: 'center',
        position: 'absolute',
        top: 98,
        fontSize: 20,
        color: colors.lightTextColor,
        fontFamily: 'Poppins',
    },
    signUpContainer: {
        position: 'absolute',
        top: 65,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    smallText: {
        fontSize: 16,
        color: colors.greyTextColor,
        fontFamily: 'Poppins',
    },
    signUpText: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 20,
        color: colors.disabledButton,
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
        color: colors.mainTextColor,
        fontSize: 44,
        fontFamily: 'Garet Bold',
    },
    smallWellcome: {
        color: colors.subtextColor,
        fontSize: 14,
        fontFamily: 'DMSans',
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
