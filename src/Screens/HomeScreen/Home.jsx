import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [ActiveTab, SetActiveTab] = useState('Home');

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={{ flexDirection: 'row', gap: 50, justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>{SetActiveTab("Home")}}>
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{SetActiveTab("Category")}}>
          <Text>Category</Text>
        </TouchableOpacity>
      </View>

      <View>
        {ActiveTab === 'Home' ? (<View><Text>Home Screen</Text></View>) : (<View><Text>Category Screen</Text></View>)}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
