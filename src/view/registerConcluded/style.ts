import { StyleSheet } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';

export const style = StyleSheet.create({
  containerK: {
    flex: 1,
    height: units.vh * 100,
    backgroundColor: colors.secondary,
  },
  imgBg: {
    flex: 1,
    height: units.vh * 65,
  },
  containerGradient:
  {
    height: units.vh * 50,

  },

  linearGradient: {
    flex: 1,
  },
  signUpContainer: {
    marginBottom: units.vh * 12,
    alignItems: 'center',
    gap: 6,
  },
  bigText: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    color: colors.mainTextColor,
  },
  smallText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colors.subtitleTextColor,
  },
});
