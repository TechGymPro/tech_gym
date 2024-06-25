import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        width: '88%',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: '5%',
    },
    optionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 12
    },
    containerTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    discountText: {
        fontFamily: 'PlusJakartaSans-Medium',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        fontSize: 12,
        borderRadius: units.vh * 10,
        color: colors.titleTextColor
    },
    yellowFlag: {
        backgroundColor: colors.disabledButton
    },
    greenFlag: {
        marginTop: units.vh * 2,
        alignSelf: 'flex-end',
        color: colors.secondary,
        backgroundColor: colors.green
    },
    title: {
        fontFamily: 'PlusJakartaSans-ExtraBold',
        fontSize: 36,
        color: colors.titleTextColor,
    },
    subtitle: {
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 16,
        color: colors.titleTextColor,
    },
    optionsText: {
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 13,
        color: colors.titleTextColor,
    },
    activeBorder: {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.disabledButton
    },
    inactiveBorder: {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.greyBgColor
    }
});
