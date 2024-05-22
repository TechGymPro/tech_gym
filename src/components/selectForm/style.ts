import { StyleSheet } from 'react-native';
import colors from '../../global/colors';


export const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        backgroundColor: colors.inputFormBackground,
        height: 44,
        borderRadius: 16,
        paddingHorizontal: 20,
        fontSize: 16,
        color: colors.inputTextColor,
        fontFamily: 'Inter-Regular',
    },
    InputLabel: {
        fontSize: 16,
        color: colors.mainTextColor,
        paddingBottom: 6,
        marginLeft: 2,
        fontFamily: 'Inter-Medium',
    },
    text: {

    },
});
