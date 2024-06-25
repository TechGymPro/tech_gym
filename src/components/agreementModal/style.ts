import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
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
        marginTop: units.vh * 3,
        flexDirection: 'row',
        gap: 10
    },
    notificationContainer: {
        marginTop: 22
    }
});

