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
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        color: colors.mainTextColor,
        borderWidth: 0.65,
        borderRadius: 5,
        borderColor: colors.codeFieldBorderColor,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: colors.primary,
    },
});