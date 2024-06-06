import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    containerImage: {
        width: '100%',
        height: 138,
        borderRadius: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 138,
        borderRadius: units.vh * 2,
        resizeMode: 'cover',
    },
    body: {
        fontFamily: 'Almarai-Bold',
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 20,
        color: colors.secondary,
    },
    containerImageTop: {
        width: '100%',
        height: 171,
        borderRadius: 20,
        overflow: 'hidden',
    },
    containerTextTop: {
        width: '60%',
        height: '100%',
        justifyContent: 'flex-end',
        gap: units.vh * 2,
        paddingBottom: units.vh * 3,
        paddingLeft: 20,
    },
    imageTop: {
        width: '100%',
        height: 171,
        borderRadius: units.vh * 6,
        resizeMode: 'cover',
    },
    header: {
        color: colors.primary,
        fontFamily: 'Almarai-Bold',
        fontSize: 27,
        paddingLeft: 20,
        paddingTop: 20
    },
    headerTop: {
        fontFamily: 'Almarai-Bold',
        fontSize: 20,
        color: colors.secondaryWhite,
    },

    cardTopBtn: {
        width: units.vw * 34,
        height: units.vw * 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: units.vh * 1,
        backgroundColor: colors.primary,
    },
    cardTopBtnText: {
        fontFamily: 'Almarai-Bold',
        fontSize: 14,
        color: colors.darkBackground,
    },
    linearGradient: {
        flex: 1,
    }
})





































