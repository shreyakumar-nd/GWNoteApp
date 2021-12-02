import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableNativeFeedbackBase} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Notes from './Notes'
import NoteEditor from './NoteEditor'


const Stack = createNativeStackNavigator();

export default function NoteNavigator(){

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Notes" component={Notes} />
                <Stack.Screen name="NoteEditor" component={NoteEditor} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}