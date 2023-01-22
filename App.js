import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";

import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store/store.js";

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

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar backgroundColor="black" style= "light"/>
      </SafeAreaProvider>
    );
  }
}
