import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import HomeScreen from "../Screen/HomeScreen";
import FindScreen from "../Screen/FindScreen";
import PostScreen from "../Screen/PostScreen";
import ChatScreen from "../Screen/ChatScreen";
import ProfilScreen from "../Screen/ProfilScreen";
import FavScreen from "../Screen/FavScreen";
import { Image, View, Text, TouchableOpacity } from "react-native";
import Router from "./Router";
import { useNavigation } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const navigation= useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name={Router.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 30,
                }}
              />
              <Text style={{ color: focused }}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Router.Chat}
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/chat.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 30,
                }}
              />
              <Text style={{ color: focused }}>CHAT</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Router.Post}
        component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/pluss.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 30,
                }}
              />
              <Text style={{ color: focused }}>POST</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Router.Fav}
        component={FavScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/fav.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 30,
                }}
              />
              <Text style={{ color: focused }}>FAV</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Router.Profil}
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/profil.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 30,
                }}
              />
              <Text style={{ color: focused }}>PROFIL</Text>
            </View>
          ),
          headerShown: true,
          headerRight: ({ color, size, focused }) => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={require("../assets/menu.png")}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 30,
                    marginRight:10,
                  }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
