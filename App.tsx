import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import React, {useEffect, useState} from 'react';

// import { User } from './interfaces/user.interface';
// import { AuthResponse } from './services/mirage/routes/user';

// import http from './services/api';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Fuerza teste :)</Text>
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
  },
});
