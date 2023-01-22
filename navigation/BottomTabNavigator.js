// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import ScheduleScreen from "../screens/ScheduleScreen.js";
import MyDropsScreen from "../screens/MyDropsScreen.js";
import SettingsScreen from "../screens/SettingsScreen.js";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MyDrops"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="My Drops"
        component={MyDropsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="water" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MyDropScreenStack = createStackNavigator();

function MyDropNavigator() {
  return (
    <MyDropScreenStack.Navigator>
      <MyDropScreenStack.Screen
        name="MyDropsScreen"
        component={MyDropsScreen}
        options={{ headerTitle: "My Drop" }}
      />
    </MyDropScreenStack.Navigator>
  );
}

const ScheduleStack = createStackNavigator();

function ScheduleScreenNavigator() {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Schedule" }}
      />
    </ScheduleStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsScreenNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
}
