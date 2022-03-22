import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QrCodeCamera from "./src/QrCodeCamera";
import Home from "./src/Home";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Scan" component={QrCodeCamera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
