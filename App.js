import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 

      <View style={styles.header}>
        <Text style={styles.boldText}>Top Nav Bar</Text>
      </View>

      <View style={styles.body}>
        <Text>Body</Text>
      </View>

      <View style={styles.bottomBar}>
        <Text>Bottom Nav Bar</Text>
      </View>
      
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header: {
    backgroundColor: '#DF00FF',
    padding: 20,
    width: '100%',
    paddingTop: '15%',
  

  },

  body: {
    height: '75%'
  },

  bottomBar: {
    backgroundColor: '#DF00FF',
    padding: 10,
    width: '100%',
    height: '25%'
  }





});
