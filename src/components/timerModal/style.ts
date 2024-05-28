import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackgroundOpacity,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        flex: 1,
        padding: '4%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonClose: {
        alignSelf: 'flex-start',
    },
    counterText: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        fontSize: 75,
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
});
