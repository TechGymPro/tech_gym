import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: 105,
        width: '88%',
        alignSelf: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '6%',
    },
    letter: {
        fontFamily: 'Montserrat',
        fontSize: 32,
        color: colors.mainTextColor,
    },
    trainingName: {
        fontFamily: 'Poppins Regular',
        fontSize: 16,
        color: colors.mainTextColor,
        width: '75%',
        marginLeft: '4%',
        paddingTop: '1%',
    },
});
