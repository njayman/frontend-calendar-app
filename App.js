import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Home from "./components/Screens/Home";
import CalendarView from "./components/Screens/CalendarView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome Home" }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarView}
          options={{ title: "Your Calendar and Scheduler" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
