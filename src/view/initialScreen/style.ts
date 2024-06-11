import { StyleSheet } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';

export const style = StyleSheet.create({
  containerWK: {
    flex: 1,
  },
  containerK: {
    flex: 1,
    height: units.vh * 100,
    backgroundColor: colors.secondary,
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: units.vh * 50
  },
  buttonContainer: {
    alignItems: 'center'
  },
  imgBg: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: units.vw * 90,
    height: units.vh * 10,
    marginBottom: 5
  },
  bigText: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.lightTextColor,
    fontFamily: 'Poppins-Medium',
    marginBottom: units.vh * 15
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  smallText: {
    fontSize: 16,
    color: colors.greyTextColor,
    fontFamily: 'Poppins-Medium',
  },
  signUpText: {
    fontSize: 18,
    lineHeight: 20,
    color: colors.disabledButton,
    fontFamily: 'Poppins-Bold',
  }
});
