import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './CameraScreen';
import CurrentDayScreen from './CurrentDayScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import UserInfo from './UserInfo';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
 

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Instructions" component={HomeScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Results" component={CurrentDayScreen} />
    </Tab.Navigator>
  );

  function HomeStackNavigator() {
    return(
      <HomeStackNavigator.Navigator>
        <HomeStackNavigator.Screen name = "Home" component = {HomeScreen} />
        <HomeStackNavigator.Screen name = "UserInfo" component = {UserInfo} />
      </HomeStackNavigator.Navigator>
    );
  }
}