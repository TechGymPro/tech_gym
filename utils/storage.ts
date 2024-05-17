import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (key: string, value: string) => {
  try {
    console.log(key);
    console.log(value);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getData = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export {getData, storeData};
