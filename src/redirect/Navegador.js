import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../pages/abas/Welcome'
import Icon from 'react-native-vector-icons/Ionicons';

import Welcome from '../pages/abas/Welcome'

const Tab = createBottomTabNavigator();

export default function Navegador() {
  return (
      <Tab.Navigator 
      screenOptions={{ 
       tabBarActiveTintColor: '#171717', headerStyle: { backgroundColor: '#ffffff' } }}
      >

      <Tab.Screen 
      name="Menu" 
      component={Welcome} 
      options={{
          headerShown: false,
          tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
      },
      
      tabBarIcon: ({ black }) => (
      <Icon name="home-outline" color={black} size={28} />
        ),
      }}/>
      </Tab.Navigator>
  );
}
