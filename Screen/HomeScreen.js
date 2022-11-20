import React  from "react";
import { View, Text, Button, StyleSheet, ImageBackground , Image} from "react-native";
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>

      </View>
    );
  }
  export default HomeScreen;