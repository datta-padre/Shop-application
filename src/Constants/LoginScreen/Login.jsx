import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../Components/Buttons';
import BreakerText from '../../Components/BreakerText';
import SocialIcon from '../../Components/SocialIcon'
import { resetAndNavigate } from '../../utils/NavigationUtils';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    resetAndNavigate('Home');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <SafeAreaView>
        {/* Header */}

        <View style={{marginVertical:16}}>
          <Text style={styles.title}>Login Account</Text>
          <Text style={styles.subtitle}>
            Please login with registered account
          </Text>
        </View>

        {/* Email / Phone */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Email or Phone Number</Text>
          <View style={styles.inputRow}>
            <Icon name="user" size={18} color="#5b5bd6" />
            <TextInput
              placeholder="Enter your email or phone number"
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputRow}>
            <Icon name="lock" size={18} color="#5b5bd6" />

            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              secureTextEntry={!showPassword}
              placeholderTextColor="#999"
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-slash' : 'eye'}
                size={18}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Button text="Login" onPress={handleLogin} />

        <BreakerText text="OR" />

      <View>
        <SocialIcon/>
      </View>

      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  subtitle: {
    color: '#999',
    marginBottom: 25,
    fontWeight: 'bold',
  },

  inputBox: {
    marginBottom: 18,
  },

  label: {
    marginBottom: 6,
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 48,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },

  forgot: {
    alignSelf: 'flex-end',
    marginVertical: 15,
  },

  forgotText: {
    color: '#5b5bd6',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
