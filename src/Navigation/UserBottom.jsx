import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../Screens/HomeScreen/Home';
import MyOrder from '../Screens/MyOrder/MyOrder'
import MyProfile from '../Screens/MyProfile/MyProfile'
import Favorites from '../Screens/Favorites/Favorites'

const Tab = createBottomTabNavigator();

const UserBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 75,
        },
        tabBarLabelStyle: { fontSize: 13,fontWeight:700 },
        tabBarActiveTintColor: '#514eb7',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({ color, size, focused }) => {

          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          }

          if (route.name === 'My Order') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'truck-fast': 'truck-fast-outline'}
                size={size}
                color={color}
              />
            );
          }

          if (route.name === 'Favorites') {
            return (
              <Ionicons
                name={focused ? 'heart-sharp' : 'heart-outline'}
                size={size}
                color={color}
              />
            );
          }

          if (route.name === 'My Profile') {
            return (
              <FontAwesome
                name={focused ? 'user' : 'user-o'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Order" component={MyOrder} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="My Profile" component={MyProfile} />
    </Tab.Navigator>
  )
}

export default UserBottom

const styles = StyleSheet.create({})
