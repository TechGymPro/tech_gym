import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgreyBgColor,
        maxHeight: 80,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    tittle: {
        color: colors.titleTextColor,
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
    messageContainer: {
        width: '80%',
        marginBottom: 60,
    },
    message: {
        color: colors.thirdColor,
        fontFamily: 'Inter-Regular',
        fontSize: 14,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: units.vw * 80,
        height: '100%',
        paddingVertical: '2%',
        paddingLeft: '5%',
    },
    containerIcon: {
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    nullIcon: {
        width: 46,
        height: 46,
        borderRadius: units.vh * 1,
        backgroundColor: colors.greyBgColor
    },
    icon: {
        marginLeft: 8,
        marginTop: 8
    }
});
