import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
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
