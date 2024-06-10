import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    targetContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    textFirstLine: {
        color: colors.mainTextColor,
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
    targetSecondLine: {
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        color: colors.mainTextColor,
    },
    targetThirdLine: {
        color: colors.thirdColor,
        fontFamily: 'Inter-Regular',
        alignSelf: 'flex-start',
        fontSize: 16,
        padding: '1%',
        borderRadius: 5,
    },

    infosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: '10%',
    },
    infosTitle: {
        fontFamily: 'Montserrat',
        color: colors.mainTextColor,
    },
    infosDescription: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
    },
});
