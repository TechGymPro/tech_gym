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
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        fontSize: 12,
        fontFamily: 'PlusJakartaSans-Medium',
        borderRadius: units.vh * 10,
        color: colors.titleTextColor
    },
    yellowFlag: {
        backgroundColor: colors.primary
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
        color: colors.titleTextColor,//800
    },
    subtitle: {
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 16,
        color: colors.titleTextColor,//700
    },
    optionsText: {
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 13,
        color: colors.titleTextColor,
    },
    activeBorder: {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.primary
    },
    inactiveBorder: {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.greyBgColor
    }
});
