import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Welcome from '../pages/abas/Welcome'
import LoseTag from '../pages/abas/LoseTag';

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
      
      <Tab.Screen 
      name="Solicitar Tag" 
      component={LoseTag} 
      options={{
          headerShown: false,
          tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
      },
      
      tabBarIcon: ({ black }) => (
      <Icon name="list-outline" color={black} size={28} />
        ),
      }}/>
      </Tab.Navigator>
  );
}