// asyncStorage for Tasky app, only stores user state

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@save_user";

export const readData = async (cb) => {
    try {
        const userState = await AsyncStorage.getItem(STORAGE_KEY);

        if (userState !== null) {
            const s = JSON.parse(userState);
            console.log("Data successfully read. User===", s);
            cb(s.uid);
        } else {
            console.log("No data found in storage");
            cb(null);
        }
    } catch (e) {
        console.log("Failed to fetch the data from storage");
        cb(null);
    }
};

export const saveData = async (userState) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, userState);
        console.log("Data successfully saved. User===---", userState);
    } catch (e) {
        console.log(
            "Failed to save the data to the storage. userState==--",
            userState,
            e
        );
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
