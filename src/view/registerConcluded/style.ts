import { StyleSheet } from 'react-native';
import { units } from '../../hooks/hooks';
import colors from '../../global/colors';

export const style = StyleSheet.create({
  containerWK: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
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
    { position: 'relative', top: units.vh * 40, height: '30%' },

  linearGradient: {
    flex: 1,
    height: units.vh * 80,
  },
  signUpContainer: {
    position: 'relative',
    bottom: units.vh * 20,
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
