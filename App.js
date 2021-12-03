import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import Login from "./components/Login";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import NoteNavigator from "./components/Notes/NoteNavigator";
import Resources from "./components/Resources";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import IndividualContact from "./components/IndividualContact";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomizableHeader = () => {
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <View style={{width: '40%'}}/>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Contacts</Text>
      <View style={{ width: '27.5%' }} />
      <TouchableOpacity style={{width: '15%', alignItems: 'center'}}> 
        <Ionicons name={'add'} size={30} color={'cornflowerblue'} />
      </TouchableOpacity>
    </View>
  );
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Contacts') {
            iconName = 'people-circle-sharp';
          } else if(route.name === 'Notes') {
            iconName = 'document-text';
          } else if (route.name === 'Resources') {
            iconName = 'information-circle';
            size = 30;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0053A0',
        tabBarInactiveTintColor: 'gray',
      })}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} options={{ headerTitle: (props) => <CustomizableHeader {...props} /> }}/>
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
          navigationOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="IndividualContact"
          component={IndividualContact}
        <Stack.Screen
          name="ContactPage"
          component={ContactPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
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
