import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../utils/NavigationUtils';
import Splash from '../Constants/SplashScreen/Splash';
import Welcome1 from '../Constants/WelcomeScreen/Welcome1'
import Login from '../Constants/LoginScreen/Login'
import BottomTab from '../Navigation/UserBottom'
import SignUp from '../Constants/SignUpScreen/SignUp'

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
       name="Splash"
       component={Splash}
      />

      <Stack.Screen 
      name="Welcome1" 
      component={Welcome1} 
      options={{ animation: 'fade' }}/>

      <Stack.Screen
       name="Login"
       component={Login}
       options={{ animation: 'slide_from_right' }} 
       />

      <Stack.Screen 
      name="SignUp" 
      component={SignUp} 
      options={{ animation: 'slide_from_right' }} 
      />
      
      <Stack.Screen
       name="Home"
       component={BottomTab} 
       options={{ animation: 'fade_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default MainNavigation;

