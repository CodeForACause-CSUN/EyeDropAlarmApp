import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

<<<<<<< HEAD
import WelcomePage from "../components/WelcomePage";

export default function TabOneScreen() {
=======
export default function ScheduleScreen() {
>>>>>>> 547832af439b2fc44fb2c133dcbab21670141ea7
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Screen</Text>
      <WelcomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
