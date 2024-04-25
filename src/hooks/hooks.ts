import {useEffect, useState} from 'react';
import {Dimensions, Keyboard} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useUnits = () => {
  const {width, height} = Dimensions.get('window');
  const units = {
    vw: width / 100,
    vh: height / 100,
  };
  return units;
};

const unitsFunction = () => {
    const {width, height} = Dimensions.get('window');
    const units = {
      vw: width / 100,
      vh: height / 100,
    };
    return units;
};

export const units: {vw: number, vh: number} = unitsFunction();

export const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};
