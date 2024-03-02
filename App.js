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
import ContactPage from './components/ContactPage';
import AddContact from './components/AddContact';
import TestPage from './components/TestPage';
import Map from './components/Map';

// Code to connect Express wrapper to frontend. Doesn't work due to error with dependencies
// class App extends Component {
//   state = {
//       data: null
//     };
  
//     componentDidMount() {
//       this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }))
//         .catch(err => console.log(err));
//     }
//       // fetching the GET route from the Express server which matches the GET route from server.js
//     callBackendAPI = async () => {
//       const response = await fetch('/express_backend');
//       const body = await response.json();
  
//       if (response.status !== 200) {
//         throw Error(body.message) 
//       }
//       return body;
//     };
  
//     render() {
//       return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1 className="App-title">Welcome to React</h1>
//           </header>
//           <p className="App-intro">{this.state.data}</p>
//         </div>
//       );
//     }
//   }

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
      <Tab.Screen name="Notes" component={NoteNavigator} />
      <Tab.Screen name="Resources" component={Resources} />
      <Tab.Screen name="Map" component={Map} />
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
          name="TestPage"
          component={TestPage}
          options={{ headerShown: false }} 
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
        />
        
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

// Code started for login authentication with Office365. See link for code reference: https://www.c-sharpcorner.com/article/microsoft-office-365-login-in-react-native/
// import React, { useState } from 'react';  
// import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';  
  
// import { authorize } from 'react-native-app-auth';  
  
// const AuthConfig = {  
//   appId: "fe8d716f-7ede-4d52-bb60-6e7ccd6a2b15",  
//   tenantId: "fc8a46c1-7fe3-4336-9e22-cd836ac7996c",  
//   appScopes: [  
//     'openid',  
//     'offline_access',  
//     'profile',  
//     'User.Read',  
//   ],  
// };  
  
// const config = {  
//   warmAndPrefetchChrome: true,  
//   clientId: AuthConfig.appId,  
//   redirectUrl: Platform.OS === 'ios' ? 'urn:ietf:wg:oauth:2.0:oob' : 'mlogin://react-native-auth',  
//   scopes: AuthConfig.appScopes,  
//   additionalParameters: { prompt: 'select_account' },  
//   serviceConfiguration: {  
//     authorizationEndpoint: 'https://login.microsoftonline.com/' + AuthConfig.tenantId + '/oauth2/v2.0/authorize',  
//     tokenEndpoint: 'https://login.microsoftonline.com/' + AuthConfig.tenantId + '/oauth2/v2.0/token',  
//   },  
// };  
  
// const App: () => React$Node = () => {  
//   const [result, setResult] = useState({});  
  
//   loginWithOffice365 = async () => {  
//     let tempResult = await authorize(config);  
//     console.log(tempResult);  
//     setResult(tempResult);  
//   };  
//   return (  
//     <>  
//       <View style={styles.container}>  
//         <TouchableHighlight  
//           style={[styles.buttonContainer, styles.loginButton]}  
//           onPress={() => loginWithOffice365()}>  
//           <Text style={styles.loginText}>Login with Office365</Text>  
//         </TouchableHighlight>  
//         <Text>{result.accessToken ? "Logged In" : "Error"}</Text>          
//       </View>  
//     </>  
//   );  
// };  
  
// const styles = StyleSheet.create({  
//   container: {  
//     flex: 1,  
//     justifyContent: 'center',  
//     alignItems: 'center',  
//     backgroundColor: '#DCDCDC',  
//   },  
//   buttonContainer: {  
//     height: 45,  
//     flexDirection: 'row',  
//     justifyContent: 'center',  
//     alignItems: 'center',  
//     marginBottom: 20,  
//     width: 250,  
//     borderRadius: 30,  
//   },  
//   loginButton: {  
//     backgroundColor: '#3659b8',  
//   },  
//   loginText: {  
//     color: 'white',  
//   },  
// });  
  
// export default App;  