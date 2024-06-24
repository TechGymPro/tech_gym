import { StyleSheet } from 'react-native';
import colors from '../../../global/colors';
import { units } from '../../../hooks/hooks';
export const style = StyleSheet.create({
  focusedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.disabledButton,
    height: '60%',
    width: units.vw * 22,
    borderRadius: (units.vw * 22) / 2,
  },
  label: {
    color: colors.mainTextColor,
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Inter-Semibold',
  },
  blurContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65%',
    width: units.vw * 10,
  },
});
