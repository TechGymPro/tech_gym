import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '8%',
    },
    header: {
        height: '12%',
        justifyContent: 'space-evenly',
        paddingHorizontal: '5%',
        marginTop: '2%',
    },
    headerUp: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    headerTextUp: {
        color: colors.lightTextColor,
        fontSize: 24,
        fontFamily: 'Montserrat',
    },
    headerDown: {
        color: colors.primary,
        fontFamily: 'Montserrat',
        alignSelf: 'center',
        fontSize: 20,
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
    midTitle: {
        fontFamily: 'Montserrat',
        color: colors.mainTextColor,
        fontSize: 24,
    },
    midSubtitle: {
        fontFamily: 'Montserrat',
        color: colors.thirdColor,
        fontSize: 20,
    },
    midSub: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    midNumbers: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
        fontSize: 24,
    },
    midLittleContainers: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
    },
    midObs: {
        fontFamily: 'Montserrat-Regular',
        color: colors.mainTextColor,
        fontSize: 14,
        marginHorizontal: '15%',
        textAlign: 'center',
    },
    midButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: '50%',
        borderRadius: 12,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    midButtonText: {
        fontFamily: 'Montserrat',
        color: colors.mainTextColor,
        fontSize: 20,
    },
    midObsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    singleButton: {
        height: 40,
        backgroundColor: colors.primary,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.mainTextColor,
        fontFamily: 'Poppins-Medium',
    },
    multipleButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    multipleButtonYellow: {
        height: 40,
        backgroundColor: colors.primary,
        borderRadius: 14,
        width: '42%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    multipleButtonWhite: {
        height: 40,
        backgroundColor: colors.secondary,
        borderRadius: 14,
        width: '42%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
