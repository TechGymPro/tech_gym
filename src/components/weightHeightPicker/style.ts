import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';


export const style = StyleSheet.create({
    container: {
        height: units.vh * 45,
        marginTop: units.vh * 12,
        marginBottom: units.vh * 8,
        paddingHorizontal: '20%'
    },
    text: {
        fontFamily: 'Inter-Regular',
        fontSize: 40,
        color: colors.darkBackground,
    },
    itemContainer: {
        height: units.vh * 10,

        paddingVertical: '2%',
        alignItems: 'center'
    },
    unselectedText: {
        fontFamily: 'Inter-Regular',
        fontSize: 30,
        color: 'rgba(0,0,0,0.35)',
    },
});
