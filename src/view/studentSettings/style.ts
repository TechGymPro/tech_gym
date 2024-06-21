import { StyleSheet } from 'react-native';
import colors from '../../global/colors';
import { units } from '../../hooks/hooks';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgreyBgColor,
  },
  buttonContainer: {
    marginTop: units.vh * 8
  },
});
