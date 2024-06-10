import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: units.vw * 12,
        height: units.vw * 12,
        lineHeight: 38,
        borderWidth: 0.65,
        borderRadius: 5,
        borderColor: colors.codeFieldBorderColor,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellError: {
        width: units.vw * 12,
        height: units.vw * 12,
        lineHeight: 38,
        borderWidth: 1.75,
        borderRadius: 5,
        borderColor: colors.badGraph,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellCorrect: {
        width: units.vw * 12,
        height: units.vw * 12,
        lineHeight: 38,
        borderWidth: 1.75,
        borderRadius: 5,
        borderColor: colors.primary,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    focusCell: {
        borderColor: colors.primary,
        borderWidth: 1.75,
    },
    text: {
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        color: colors.mainTextColor,
    },
});
