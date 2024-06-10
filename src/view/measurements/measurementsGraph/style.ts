import { StyleSheet } from 'react-native';
import colors from '../../../global/colors';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBackground,
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
        color: colors.secondary,
        fontFamily: 'Inter-Regular',
        alignSelf: 'flex-start',
        fontSize: 16,
        padding: '1%',
        borderRadius: 5,
    },
    textDivider: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
        width: '86%',
        alignSelf: 'center',
        marginVertical: '4%',
        fontSize: 15,
    },
    chartText: {
        fontFamily: 'Montserrat',
        color: colors.badGraph,
        alignSelf: 'flex-end',
        marginRight: 20,
        fontSize: 16,
    },
    ico: {
        width: 60,
        height: 60,
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
