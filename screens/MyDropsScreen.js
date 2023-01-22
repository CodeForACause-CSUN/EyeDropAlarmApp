import { StyleSheet, ScrollView, Button, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import { Text, View } from "../components/Themed";
import AddDropModal from "../components/AddDropModal";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";

// multi lang stuff
import "../helpers/i18n";
import { useTranslation } from "react-i18next";

export default function MyDropsScreen() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState("en");
  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };

  const drops = useSelector((state) => state.drops.drops);

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <AddDropModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <Text style={styles.title}>My Drop Screen</Text>

      <Text style={{ fontWeight: "bold", fontSize: 25, color: "#33A850" }}>
        {t("hello")}{" "}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 25, color: "#33A850" }}>
        {t("this line is translated")}
      </Text>

      <Pressable
        onPress={() => changeLanguage("en")}
        style={{
          backgroundColor: currentLanguage === "en" ? "#33A850" : "#d3d3d3",
          padding: 20,
        }}
      >
        <Text>Select English</Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage("es")}
        style={{
          backgroundColor: currentLanguage === "es" ? "#33A850" : "#d3d3d3",
          padding: 20,
        }}
      >
        <Text>Seleccionar inglés</Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage("hi")}
        style={{
          backgroundColor: currentLanguage === "hi" ? "#35A850" : "#d373d3",
          padding: 20,
        }}
      >
        <Text>हिंदी का चयन करें</Text>
      </Pressable>

      <ScrollView style={styles.ScrollContainer}>
        <View style={styles.eventsContainer}>
          {drops.length > 0 ? (
            drops.map((d) => {
              return (
                <View key={d.id}>
                  <Text style={styles.title}>{d.name}</Text>
                </View>
              );
            })
          ) : (
            <Text>No Drops</Text>
          )}
        </View>
      </ScrollView>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          const title = "Hello";
          const body = "World";
          const data = { data: "goes here" };
          const seconds = 2;
          await schedulePushNotification(title, body, data, seconds);
          console.log("Notification scheduled - Button");
        }}
      />

      <Button title="Add Drop Data" onPress={() => setModalVisible(true)} />
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

async function schedulePushNotification(title, body, data, seconds) {
  console.log("Notification scheduled - scheduler");
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data,
    },
    trigger: { seconds },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
