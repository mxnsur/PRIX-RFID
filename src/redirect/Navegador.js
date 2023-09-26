import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navegador() {
  return (
      <Tab.Navigator
      screenOptions={{ 
       tabBarActiveTintColor: '#3e6a5d', headerStyle: { backgroundColor: '#ffffff' } }}
      >
      </Tab.Navigator>
  );
}