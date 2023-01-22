import { StyleSheet, ScrollView, Button, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import { Text, View } from "../components/Themed";
import AddDropModal from "../components/AddDropModal";
import WelcomePage from "../components/WelcomePage";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";

// multi lang stuff
import "../helpers/i18n";
import { useTranslation } from "react-i18next";

export default function MyDropsScreen() {
  const { t } = useTranslation();

  const drops = useSelector((state) => state.drops.drops);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <WelcomePage/>
      <AddDropModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Text style={styles.title}>My Drops</Text>
      <ScrollView style={styles.ScrollContainer}>
        <View style={styles.eventsContainer}>
          {drops.length > 0 ? (
            drops.map((d) => {
              return (
                <View style={styles.dropListItem} key={d.id}>
                  <Text style={styles.title}>{d.name}</Text>
                  <Text style={styles.dropTextDetails}>{d.days} days</Text>
                  <Text style={styles.dropTextDetails}>{d.eye} {d.eye === 'Both' ? 'eyes' : 'eye'}</Text>
                  <Text style={styles.dropTextDetails}>Start Date: {d.startDate}</Text>
                  <Text style={styles.dropTextDetails}>{d.often} times a day</Text>
                  <Text style={styles.dropTextDetails}>Taper: {d.taper}</Text>
                  <Text style={styles.dropTextDetails}># of Alarms: {d.alarms}</Text>
                  <Text style={styles.dropTextDetails}>{d.capColor} cap color</Text>
                </View>
              );
            })
          ) : (
            <Text>{t("No Drops")}</Text>
          )}
        </View>
      </ScrollView>

      <Button title={t("Add New Drop")} onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: '13%',
  },
  ScrollContainer: {
    width: '90%',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  dropTextDetails: {
    fontSize: 20,
    marginBottom: 5,
  },
  dropListItem: {
    paddingBottom: 10,
    marginTop: 10,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
