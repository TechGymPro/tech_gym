import {StyleSheet} from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: 'Garet Bold',
    marginTop: 20,
  },
});
