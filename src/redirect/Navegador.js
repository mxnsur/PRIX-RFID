import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Welcome from '../pages/abas/Welcome'
import SolicitarTag from '../pages/abas/SolicitarTag'
import Feedback from '../pages/abas/Feedback'

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
      component={SolicitarTag} 
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
      
      <Tab.Screen 
      name="Feedback" 
      component={Feedback} 
      options={{
          headerShown: false,
          tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
      },
      
      tabBarIcon: ({ black }) => (
      <Icon name="newspaper-outline" color={black} size={28} />
        ),
      }}/>
      </Tab.Navigator>
  );
}