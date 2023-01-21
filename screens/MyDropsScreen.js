import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";

export default function MyDropsScreen() {
  const drops = useSelector((state) => state.drops.drops);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Drop Screen</Text>
      <ScrollView style={styles.ScrollContainer}>
        <View style={styles.eventsContainer}>
          {drops.length > 0 ? (
            drops.map((d) => {
              return (
                <View key={d.id}>
                  <Text style={styles.title}>{d.name}</Text>
                  <Text>{d.days}</Text>
                  <Text>{d.eye}</Text>
                  <Text>{d.startDate}</Text>
                  <Text>{d.often}</Text>
                  <Text>{d.taper}</Text>
                  <Text>{d.alarms}</Text>
                  <Text>{d.capColor}</Text>
                </View>
              );
            })
          ) : (
            <Text>No Drops</Text>
          )}
        </View>
      </ScrollView>
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