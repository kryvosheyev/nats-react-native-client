import 'text-encoding-polyfill';
import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import connectNats from './connectNats';



export default function App() {
  useEffect(() => {
    connectNats();
  }, [])

  return (
    <View style={styles.container}>
      <Text>NATS websocket test</Text>
      <Button onPress={() => { connectNats() }} title={'Connect'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
