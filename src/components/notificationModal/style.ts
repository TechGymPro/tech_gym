import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: colors.darkBackgroundOpacity,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: colors.secondary,
        minHeight: '5%',
        width: '88%',
        borderRadius: 15,
        alignItems: 'center',
        paddingBottom: 26,
    },
    topBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 4,
        paddingHorizontal: 2,
        marginBottom: 4,
    },
    tittleContainer: {
        width: '78%',
        marginBottom: 9,
    },
    tittle: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        fontSize: 18,
    },
    messageContainer: {
        width: '78%',
        marginBottom: 60,
    },
    message: {
        color: colors.subtextColor,
        fontFamily: 'DMSans',
        fontSize: 14,
    },
    button: {
        backgroundColor: colors.primary,
        width: '55%',
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
    },
    icon: {
        marginRight: 8,
    },
});
