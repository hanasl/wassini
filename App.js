import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screen/HomeScreen";
import ChatScreen from "./Screen/ChatScreen";
import FindScreen from "./Screen/FindScreen";
import PostScreen from "./Screen/PostScreen";
import Tabs from "./navigation/Tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
