import {StyleSheet} from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBackground,
    flex: 1,
  },
  emptyContainer: {
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyText: {
    color: colors.inputTextColor,
    fontSize: 18,
  },
});
