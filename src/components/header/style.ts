import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        height: units.vh * 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: '5%',
        backgroundColor: colors.lightgreyBgColor,
    },
    darkTheme: { backgroundColor: colors.mainTextColor },
    containerJustifyContent: {
        justifyContent: 'space-between'
    },
    hello: {
        color: colors.titleTextColor,
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: '700',
    },
    whiteHello: {
        color: colors.subtitleSecondary
    },
    ico: {
        width: 22,
        height: 24,
        alignSelf: 'flex-end',
        marginRight: 20
    },
    icoActive: {
        width: 32,
        height: 32,
        alignSelf: 'flex-end',
    },
    containerIco: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
