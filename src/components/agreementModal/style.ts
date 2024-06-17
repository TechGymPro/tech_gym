import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    button: {
        width: units.vw * 88,
        height: units.vh * 6,
        marginBottom: units.vh * 2,
        borderRadius: (units.vw * 88) / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Inter-ExtraBold',
        color: colors.mainTextColor
    },
    sheetTextTitle: {
        marginTop: units.vh * 2,
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: colors.mainTextColor
    },
    sheetTextsubtitle: {
        textAlign: 'center',
        paddingHorizontal: '2%',
        marginTop: units.vh * 2,
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: colors.mainTextColor
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10
    },
    smallButton: {
        width: units.vw * 45,
        height: units.vh * 6,
        marginTop: units.vh * 3,
        marginBottom: units.vh * 2,
        borderRadius: (units.vw * 88) / 2,
        backgroundColor: colors.primary,
    },
    smallGreyButton: {
        backgroundColor: colors.greyBgColor,
    }
});

