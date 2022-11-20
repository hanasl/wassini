import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { StyleSheet, Text, View } from "react-native";

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";


import DrawerNav from "./navigation/DrawrNav";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav/>
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
