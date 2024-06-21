import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: colors.lightgreyBgColor,
    },
    tittle: {
        color: colors.titleTextColor,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
    },
    subContainer: {
        width: units.vw * 90,
        height: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '4%',
    },
    ico: {
        width: 28,
        height: 28,
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
});
