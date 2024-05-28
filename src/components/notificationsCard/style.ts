import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        maxHeight: 100,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        flexDirection: 'row',
    },
    tittleContainer: {
        width: '78%',
        marginBottom: 9,
    },
    tittle: {
        color: colors.mainTextColor,
        fontFamily: 'Montserrat',
        fontSize: 15,
    },
    messageContainer: {
        width: '78%',
        marginBottom: 60,
    },
    message: {
        color: colors.subtextColor,
        fontFamily: 'DMSans',
        fontSize: 13,
    },
    left: {
        height: '100%',
        width: '87%',
        paddingVertical: '5%',
        justifyContent: 'space-between',
        paddingLeft: '5%',
    },
    right: {
        height: '100%',
        width: '13%',
        justifyContent: 'flex-end',
        paddingBottom: '3%',
    },
    icon: {
        marginRight: 8,
    },
});
