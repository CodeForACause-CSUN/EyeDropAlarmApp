import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";

import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store/store.js";
import { changeLanguage } from "./actions/settingsActions.js";

// Local storage
import { readData, saveData } from "./store/localStorage.js";

// multiple languages support
import "./helpers/i18n";
import { useTranslation } from "react-i18next";

// Redux store wrapper
export default AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  // const drops = useSelector((state) => state.drops.drops);

  const { i18n } = useTranslation();

  useEffect(() => {
    console.log("Trying to read data from local storage...");
    readData((language) => {
      if (language) {
        console.log("found local lang", language);

        dispatch(changeLanguage(language)); // if we get language from local storage, we set it to the store

        i18n // and we change the language
          .changeLanguage(language)
          .then(() => {
            console.log("App.js - i18n- language changed to: ", language);
          })
          .catch((err) => console.log(err));
      } else {
        console.log("No user data found in local storage");
      }
    }, "@eye-app-language"); // reading data from local storage

    readData((drops) => {
      if (drops) {
        console.log("found local drops", drops);
        dispatch({ type: "SET_DROPS", payload: drops }); // if we get drops from local storage, we set them to the store
      } else {
        console.log("No user drops data found in local storage");
      }
    }, "@eye-app-drops"); // reading data from local storage))
  }, []);

  if (!isLoadingComplete) {
    // splash screen until assets are loaded
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar backgroundColor="black" style="light" />
      </SafeAreaProvider>
    );
  }
}
