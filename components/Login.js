import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {User, UserList} from "./Classes/User";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    //id, email, password, name, position, auth_token
  var temp = new User(1,"Test@nd.edu", "password", "user", "dev", 1231221312);
  
  function forgotPassword() {
   //need email system to authenticate user to change password
  }

  function createAccount(){
    navigation.navigate("CreateAccount");
  }

  function validateForm() {
    //for testing uncomment below
    //so you do not have to input something for login
    navigation.navigate("MainTabNavigator");
    //

    if(email.length > 0 && password.length > 0){
      if(email == temp.email && password == temp.password){
      navigation.navigate("MainTabNavigator");
      }
      else{
        alert("Incorrect email or password");
      }
    }
    else{
      return false;
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo2.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email..."
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password..."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={() => forgotPassword()}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => createAccount()}>
        <Text style={styles.forgot_button}>Create Account?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => validateForm()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 250,
    height: 300,
  },

  inputView: {
    backgroundColor: "blue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    width: "100%",
    textAlign: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#009dff",
  },
});
