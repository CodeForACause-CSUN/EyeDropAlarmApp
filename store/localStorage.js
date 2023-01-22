// asyncStorage for Tasky app, only stores user state

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@save_data_eye_app";

export const readData = async (cb) => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (data !== null) {
      const s = JSON.parse(data);
      console.log("Data successfully read. User===", s);
      cb(s.language);
    } else {
      console.log("No data found in storage");
      cb(null);
    }
  } catch (e) {
    console.log("Failed to fetch the data from storage", e);
    cb(null);
  }
};

export const saveData = async (data) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, data);
    console.log("Data successfully saved. ", data);
  } catch (e) {
    console.log("Failed to save the data to the storage. ", data, e);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("Storage successfully cleared!");
  } catch (e) {
    console.log("Failed to clear the async storage.");
  }
};
