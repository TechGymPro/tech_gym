import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '8%',
    },
    progressContainer: {
        height: '12%',
        justifyContent: 'space-evenly',
        paddingHorizontal: '5%',
        marginTop: '2%',
    },
    subtitle: {
        color: colors.primary,
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: '37%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'cover',
    },
    midContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '12%',
    },
    exerciseTitle: {
        fontFamily: 'Inter-Bold',
        color: colors.subtitleSecondary,
        fontSize: 32,
        marginBottom: units.vh * 2
    },

    containerButton: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        gap: 20
    },
    bottomContainer: {
        marginTop: units.vh * 15,
        marginBottom: units.vh * 5
    }
});
