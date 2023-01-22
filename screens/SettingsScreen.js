import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { useEffect } from "react";

import SelectDropdown from "react-native-select-dropdown";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";

// multi lang stuff
import "../helpers/i18n";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../actions/settingsActions";
import {
  availableLanguages,
  availableLanguagesCodes,
} from "../assets/languages/languegesMeta";

import { clearStorage } from "../store/localStorage";

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const language = useSelector((state) => state.settings.language);

  const changeLanguagHandler = (language) => {
    i18n
      .changeLanguage(language)
      .then(() => {
        console.log("Settings - i18n- language changed to: ", language);
        dispatch(changeLanguage(language));
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Select Language")}</Text>

      <SelectDropdown
        data={availableLanguages}
        onSelect={(selectedItem, index) => {
          changeLanguagHandler(availableLanguagesCodes[index]);
          // dispatch(changeLanguage(availableLanguagesCodes[index]));
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          console.log("222", item, index);
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />

      <Pressable onPress={() => clearStorage()}>
        <Text>Clear Stored Data</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
