import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/Login";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Notes from "./components/Notes";
import Resources from "./components/Resources";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Resources" component={Resources} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  header: {
    backgroundColor: "#DF00FF",
    padding: 20,
    width: "100%",
    paddingTop: "15%",
  },

  body: {
    height: "75%",
  },

  bottomBar: {
    backgroundColor: "#DF00FF",
    padding: 10,
    width: "100%",
    height: "25%",
  },
});
