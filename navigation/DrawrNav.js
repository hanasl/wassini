import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import "react-native-reanimated";
import HomeScreen from "../Screen/HomeScreen";
import Tabs from "./Tabs";
import Router from "./Router";
import CustomDrawer from "./CustomDrawer";
import Reservation from "./Reservation";
import Payment from "./Payment";
import Logout from "./Logout";
import Exemple from "./Ecemple";

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        activeBackgroundColor: "#FF0",
        drawerActiveTintColor: "FFF",
      }}
    >
      <Drawer.Screen name={Router.Home} component={Tabs} />
      <Drawer.Screen name={Router.Resv} component={Reservation} />
      <Drawer.Screen name={Router.Pay} component={Payment} />
      <Drawer.Screen name={Router.Exemple} component={Exemple} />
      <Drawer.Screen name={Router.Log} component={Logout} />
    </Drawer.Navigator>
  );
}
export default DrawerNav;
