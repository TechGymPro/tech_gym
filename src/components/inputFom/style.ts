import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    containerPhoneEmail: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: colors.greyBorderColor,
        borderRadius: 12,
        backgroundColor: colors.inputFormBackground,
    },
    input: {
        width: '100%',
        height: 44,
        fontSize: 16,
        color: colors.titleTextColor,
        fontFamily: 'Inter-Regular',
    },
    InputLabel: {
        fontSize: 16,
        color: colors.secondaryTextColor,
        paddingBottom: 6,
        marginLeft: 2,
        fontFamily: 'Inter-Regular',
    },
    textDDI: {
        color: colors.placeholderTextColor,
        fontSize: 16,
    },
    textEmail: {
        color: colors.mainTextColor
    }
});
