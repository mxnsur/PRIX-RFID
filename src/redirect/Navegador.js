import * as React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../pages/abas/Welcome'
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Navegador() {
  return (
      <Tab.Navigator
      screenOptions={{ 
       tabBarActiveTintColor: '#3e6a5d', headerStyle: { backgroundColor: '#ffffff' } }}
      >

      <Tab.Screen 
      name="Menu" 
      component={Welcome} 
      options={{
          headerShown: false,
          tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
      },
      
      tabBarIcon: ({ color }) => (
      <Icon name="home-outline" color={color} size={23} />
        ),
      }}/>
      </Tab.Navigator>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  sectionHeader: {
    backgroundColor: '#3e6a5d',
    color: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 25,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#333333',
    fontSize: 18,
  },
  separator: {
    borderBottomWidth: 1.5,
    borderColor: '#dbdbdb',
  },
  footerText: {
    color: '#333333',
    fontSize: 12,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
