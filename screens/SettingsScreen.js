import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";

// multi lang stuff
import "../helpers/i18n";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../actions/settingsActions";

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => dispatch(setLanguage(value)))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>settings screen</Text>

      <Pressable
        onPress={() => changeLanguage("en")}
        style={{
          padding: 20,
        }}
      >
        <Text>Select English</Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage("es")}
        style={{
          padding: 20,
        }}
      >
        <Text>Seleccionar inglés</Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage("hi")}
        style={{
          padding: 20,
        }}
      >
        <Text>हिंदी का चयन करें</Text>
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
