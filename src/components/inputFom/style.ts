import {StyleSheet} from 'react-native';
import colors from '../../global/colors';
import {units} from '../../hooks/hooks';

export const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  containerPhoneEmail: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.greyBorderColor,
    borderRadius: 12,
    backgroundColor: colors.inputFormBackground,
  },
  input: {
    height: units.vh * 7,
    fontSize: 16,
    color: colors.titleTextColor,
    fontFamily: 'Inter-Regular',
    borderWidth: 1,
    borderColor: colors.greyBorderColor,
    borderRadius: 12,
    backgroundColor: colors.inputFormBackground,
  },
  phoneInput: {
    fontSize: 16,
    flex: 1,
    color: colors.titleTextColor,
    fontFamily: 'Inter-Regular',
  },
  InputLabel: {
    paddingLeft: '1%',
    paddingBottom: 8,
    fontSize: 16,
    color: colors.mainTextColor,
    fontFamily: 'Inter-Medium',
  },
  textDDI: {
    color: colors.placeholderTextColor,
    fontSize: 16,
  },
  textInput: {
    color: colors.mainTextColor,
    paddingLeft: 15,
  },
});
