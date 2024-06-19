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
        flex: 1,
        width: '80%',
        alignSelf: 'center',
        gap: units.vh * 2,
        marginTop: units.vh * 2,
        marginBottom: units.vh * 2,
    },
    progressBar: {
        width: '100%',
        height: units.vh * 1,
        borderRadius: units.vh * 12,
        overflow: 'hidden',
        backgroundColor: colors.greyBorderColor,
    },
    fill: {
        height: '100%',
        borderRadius: units.vh * 12,
        backgroundColor: colors.primary,
    },
    subtitle: {
        color: colors.primary,
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: units.vh * 30,
        marginTop: 10,
        resizeMode: 'cover',
    },
    video: {
        width: '100%',
        height: units.vh * 50,
        // marginTop: 10,
        // resizeMode: 'contain',
    },
    midContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    exerciseTitle: {
        marginTop: units.vh * 4,
        marginBottom: units.vh * 2,
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        color: colors.subtitleSecondary,
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
        alignSelf: 'center'
    }
});
