import { Text, View,StyleSheet } from "react-native-svg";
import react from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
           <DrawerItemList {...props} />
            
        </DrawerContentScrollView>
    )
}
export default CustomDrawer;