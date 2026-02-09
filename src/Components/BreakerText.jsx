import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreakerText = ({ text }) => {
  return (
    <View style={styles.breakerContainer}>
      <View style={styles.line} />
      <Text style={styles.breakerText}>{text}</Text>
    </View>
  )
}

export default BreakerText;

const styles = StyleSheet.create({
  breakerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#E0E0E0',
    position: 'absolute',
  },

  breakerText: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    color: '#222',
    fontWeight:"bold",
    fontSize: 12,
    // opacity: 0.8,
  },
})
