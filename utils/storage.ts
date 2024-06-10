import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (key: string, value: string) => {
  try {
    console.log(key);
    console.log(value);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error setting item', e);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error('Error getting item', error);
  }
};

export {getData, storeData};
