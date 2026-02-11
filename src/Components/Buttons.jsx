import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

const Buttons = ({ text, onPress }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
  wrapper: {
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor:Colors.background,
},
  button: {
    backgroundColor: Colors.primary,
    width: '90%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
