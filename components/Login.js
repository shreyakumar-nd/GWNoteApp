import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { User, UserList } from "./Classes/User";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Animated,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,

} from "react-native";
// import { ReactModules } from "../assets/index.js";

// Dismiss the Keyboard by touching anywhere on the screen using
// the TouchableWithoutFeedback and Keyboard package to create a handler component
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // id, email, password, name, position, auth_token
  var temp = new User(1, "Test@nd.edu", "password", "user", "dev", 1231221312);

  function forgotPassword() {
    Keyboard.dismiss();
    navigation.navigate("ForgotPassword");
    // need email system to authenticate user to change password
  }

  function createAccount() {
    Keyboard.dismiss();
    navigation.navigate("CreateAccount");

  }

  function validateForm() {
    // for testing uncomment below so you do not have to input something for login
    Keyboard.dismiss();
    navigation.navigate("MainTabNavigator");
    /*
    if (email.length > 0 && password.length > 0 && (email == temp.email && password == temp.password)) {
        setEmail("");
        setPassword("");
        navigation.navigate("MainTabNavigator");
      } else {
        alert("Incorrect email or password");
      }
    */
  }



  // Comments inside of the render block need to be in JSX multiline format: {/*COMMENT*/}

  return (
    <React.Fragment>
      <View style={styles.headerBar}>
        <Image style={styles.headerBarImg} source={require("../assets/goodwill-text-transparent.png")}/>
      </View>

      <DismissKeyboard>

        <KeyboardAvoidingView style={styles.container} behavior="padding" >

          {/* Goodwill Image*/}
          <Image style={styles.image} source={require("../assets/logo-img.png")}/>

          <View>
            <Text style={styles.headerText}>Sign In</Text>
          </View>

          {/*Email input field*/}
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username or email"
              placeholderTextColor="#7a7a7a"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          {/*Password input field*/}
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#7a7a7a"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          {/*Forgot Password Button*/}
          <TouchableOpacity onPress={() => forgotPassword()}>
            <Text style={styles.forgot_text}>Forgot Password?</Text>
          </TouchableOpacity>

          {/*Create Account Button*/}
          <TouchableOpacity onPress={() => createAccount()}>
            <Text style={styles.forgot_text}>Create Account</Text>
          </TouchableOpacity>

          {/*Login Button*/}
          <TouchableOpacity style={styles.loginBtn} onPress={() => validateForm()}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </React.Fragment>
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
    marginBottom: 0,
    marginTop: 0,
    flex: .65,
    resizeMode: "contain",
  },

  inputView: {
    backgroundColor: '#f2f2f2',
    borderColor: '#e0e0e0',
    borderRadius: 8,
    borderWidth: 1,
    width: "70%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },

  TextInput: {
    flex: 1,
    borderRadius: 8,
    borderColor: '#e0e0e0',
    paddingLeft: 12,
    marginLeft: 0,
    width: "100%",
    textAlign: "left",
    color: "black",
  },

  forgot_text: {
    height: 30,
    marginBottom: 0,
    color: "#01529c",
    // fontWeight: "bold",
  },

  loginBtn: {
    width: "70%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#01529c",
  },

  loginText: {
    color: "white",
    fontWeight: "bold",
  },

  headerBar: {
    height: "11%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#01529c",
    zIndex: 1
  },

  headerBarText: {
    zIndex: 2
  },

  headerBarImg: {
    zIndex: 2,
    flex: 1,
    width: 150,
    height: 150,
    marginTop: "8%",
    resizeMode: 'contain'
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    padding: 20,
  },

});
