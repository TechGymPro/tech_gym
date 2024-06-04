import {StyleSheet} from 'react-native';
import colors from '../../global/colors';
import {units} from '../../hooks/hooks';

export const style = StyleSheet.create({
  container: {
    height: units.vh * 23,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: '100%',
    width: '78%',
    backgroundColor: colors.disabledButton,
    borderRadius: 8,
    paddingHorizontal: '8%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  flagView: {
    height: '25%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flagVisa:{
    height: 18,
    width: 55,
  },
  flagMaster:{
    height: 25,
    width: 40,
  },
  contactless:{
    height: 28,
  },
  numberView: {
    height: '22%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  namespaceView: {
    height: '22%',
    // backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  normalCardTextMain: {
    color: colors.lightTextColor,
    fontSize: 16.65,
    fontFamily: 'Inter',
  },
  bigCardTextMain: {
    color: colors.lightTextColor,
    fontSize: 18.5,
    fontFamily: 'Inter-Bold',
  },
});
