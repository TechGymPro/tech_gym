import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        height: units.vh * 10,
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingBottom: '4%',
    },
    hello: {
        color: colors.darkBackground,
        fontSize: 22,
        fontFamily: 'Montserrat',
    },
    ico: {
        width: 38,
        height: 38,
    },
});
