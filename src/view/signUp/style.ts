import { StyleSheet } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    containerWK: {
        flex: 1,
        height: units.vh * 20,
        backgroundColor: colors.darkBackground,
    },
    containerK: {
        flex: 1,
        height: units.vh * 20,
        backgroundColor: colors.secondary,
    },
    imgBg: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.85)',
    },
    logo: {
        alignSelf: 'center',
        width: units.vw * 65,
        height: units.vh * 8,
        marginTop: units.vh * 18,
        marginBottom: units.vh * 30,
    },

    downScreenK: {
        width: '100%',
        height: units.vh * 42,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        paddingTop: 30,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        backgroundColor: colors.secondary,
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: units.vh * 3,
    },
    bigWelcome: {
        color: colors.titleTextColor,
        fontSize: 32,
        fontFamily: 'Inter-Bold',
    },
    smallWellcome: {
        color: colors.mainTextColor,
        fontSize: 16,
        fontFamily: 'Inter',
        marginTop: 5,
    },
    inputContainer: {
        width: units.vw * 88,
        height: units.vh * 8,
        justifyContent: 'space-between',
        marginBottom: units.vh * 5,
        marginTop: units.vh * 1,
    },
});
