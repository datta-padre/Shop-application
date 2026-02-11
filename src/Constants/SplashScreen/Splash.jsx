import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from '../../utils/NavigationUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../utils/Colors';

const Splash =  () => {

  const isLogin =  AsyncStorage.getItem("isLogin")

    useEffect(()=>{
    const timer = setTimeout(() => {
      if(isLogin == true){
        resetAndNavigate('Home');
      }else{
        resetAndNavigate('Welcome1');
      }
    },2000);
    return () => clearTimeout(timer);
  },[])

  return (
    <View style={styles.container}>
      
      {/* Center Content */}
      <View style={styles.centerContent}>
        <Animated.Text style={styles.title}>Kutuku</Animated.Text>
        <Text style={styles.subtitle}>Any Shopping Just from Home</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 0.0.1</Text>
      </View>

    </View>
  )
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primary,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom:40
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#f3f3f3",
  },
  subtitle: {
    color: "#f3f3f3",
    marginTop: 5,
  },
  footer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: "#f3f3f3",
    fontSize: 12,
    opacity: 0.8,
  },
})
