import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '2%',
        backgroundColor: colors.secondary,
    },
    measurementsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        gap: units.vw * 20,
        marginTop: units.vh * 4,
        marginBottom: units.vh * 4,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: colors.borderSecondary,
        borderTopColor: colors.borderSecondary,
    },
    measurementsInfo: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors.thirdColor
    }
});

