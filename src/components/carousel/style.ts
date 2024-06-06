import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
    // container: {
    //     height: units.vh * 8,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 20,
    //     paddingHorizontal: '5%',
    //     backgroundColor: colors.secondary,
    // },
    containerImage: {
        width: 276,
        height: 138,
        borderRadius: 20,
        overflow: 'hidden'
    },
    image: {
        width: 276,
        height: 138,
        borderRadius: units.vh * 2,
        resizeMode: 'cover',
    },
    body: {
        color: colors.secondary,
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 20
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
        width: 350,
        height: 171,
        borderRadius: units.vh * 6,
        resizeMode: 'cover',
    },
    header: {
        color: colors.primary,
        fontSize: 27,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    headerTop: {
        color: colors.secondaryWhite,
        fontSize: 20,
        fontWeight: "bold",
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
        fontSize: 14,
        fontWeight: "bold",
        color: colors.darkBackground,
    },
    linearGradient: {
        flex: 1,
    }
})





































