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

// multi lang stuff
import "./helpers/i18n";
import { useTranslation } from "react-i18next";

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

  // const events = useSelector((state) => state.events.events);
  const language = useSelector((state) => state.settings.language);
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log("Trying to read data from local storage...");
    readData((language) => {
      if (language) {
        console.log("found local lang", language);
        dispatch(changeLanguage(language));
        i18n
          .changeLanguage(language)
          .then(() => {
            console.log("App.js - i18n- language changed to: ", language);
          })
          .catch((err) => console.log(err));
      } else {
        console.log("No user data found in local storage");
      }
    }); // reading data from local storage
  }, []);

  // useEffect(() => {
  //   i18n
  //     .changeLanguage(language)
  //     .then(() => {
  //       console.log("App.js - i18n- language changed to: ", language);
  //     })
  //     .catch((err) => console.log(err));
  // }, [language]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
