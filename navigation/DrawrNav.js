import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler";
import "react-native-reanimated";
import HomeScreen from '../Screen/HomeScreen';
import Tabs from './Tabs';
import FindScreen from '../Screen/FindScreen';
import Router from './Router';
import FavScreen from '../Screen/FavScreen';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}  />}
    screenOptions={{headerShown: false}}>
    <Drawer.Screen name={Router.Home} component={Tabs} />
    <Drawer.Screen name={Router.Fav} component={Tabs} />
    
  </Drawer.Navigator>
  );
}
export default DrawerNav;