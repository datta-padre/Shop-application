import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const SocialIcon = () => {
  return (
    <View style={styles.container}>
        
      <TouchableOpacity style={styles.socialBtn}>
        <Image
          source={require('../Assets/Image/google.png.webp')}
          style={styles.icon}
        />
        <Text style={styles.text}>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn}>
        <Image
          source={require('../Assets/Image/facebook.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Sign In with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 12,
  },

  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
});
