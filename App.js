import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Contacts from './components/Contacts'
import Notes from './components/Notes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 

    <NavigationContainer> 
      <Stack.Navigator>
      
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
          />

        <Stack.Screen 
          name="Contacts"
          component={Contacts}
          options={{title: 'Contacts'}}
        />

        <Stack.Screen 
          name="Notes"
          component={Notes}
          options={{title: 'Notes'}}
        />


      </Stack.Navigator>
    </NavigationContainer> 
    
  
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
