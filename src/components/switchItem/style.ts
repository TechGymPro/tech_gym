import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        width: units.vw * 90,
        height: units.vh * 8,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: units.vh * 2,
        backgroundColor: colors.lightgreyBgColor,
    },
    tittle: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: colors.titleTextColor,
    },
});