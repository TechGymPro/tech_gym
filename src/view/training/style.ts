import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.subtitleSecondary
  },
  image: {
    height: '15%',
    width: '100%',
    resizeMode: 'cover',
  },
  emptyContainer: {
    height: 95,
    paddingHorizontal: '8%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textEmpty: {
    textAlign: 'center',
  },
});
