import { StyleSheet } from 'react-native';
import colors from '../../../global/colors';
import { units } from '../../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBackground,
        height: units.vh * 100,
    },
    iconContainer: {
        backgroundColor: colors.thirdColor,
        height: units.vw * 9.5,
        width: units.vw * 9.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: units.vw * 9.5 / 2,
    },
    tittle: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        fontSize: units.vw * 4.4,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '65%',
        alignSelf: 'center',
        marginTop: units.vh * 4,
        marginBottom: units.vh * 4,
    },
    inputsContainer: {
        height: units.vh * 35,
        justifyContent: 'space-between',
    },
});
