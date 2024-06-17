import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    tabContainer: {
        width: units.vw * 95,
        height: units.vh * 6,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.greyBgColor,
    },
    darkTheme: { backgroundColor: colors.secondary },
    optionContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    option: {
        width: units.vw * 30,
        height: units.vw * 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    optionText: {
        color: colors.titleTextColor,
        fontFamily: 'Inter-Medium',
        fontSize: 14
    },
    measurementsContainer: {
        width: units.vw * 90,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        gap: units.vw * 20,
        marginTop: units.vh * 3,
        marginBottom: units.vh * 4,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: colors.borderSecondary,
        borderTopColor: colors.borderSecondary,
    },
    measurementsInfo: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.thirdColor
    },
    darkThemeText: { color: colors.lightgreyBgColor },
});

