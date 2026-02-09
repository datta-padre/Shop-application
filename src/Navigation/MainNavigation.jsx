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
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome1" component={Welcome1} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={BottomTab} />
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

const Home = () => {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
