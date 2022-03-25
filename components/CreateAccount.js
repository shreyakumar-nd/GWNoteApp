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
import {styles} from "../assets/StyleSheet";

// Dismiss the Keyboard by touching anywhere on the screen using
// the TouchableWithoutFeedback and Keyboard package to create a handler component
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default function CreateAccount({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  function createAccount() {
    let names = name.split(" ");
    let initials = names[0][0] + names[1][0];
    let user = new User(email, password, name, position, initials);
    //insert db creation route
    navigation.navigate("Login");
  }

  function backToLogin() {
    Keyboard.dismiss();
    navigation.navigate("Login");
  }

  return (

    <React.Fragment>
      <View style={styles.headerBar}>

        <TouchableOpacity style={styles.backBtn} onPress={() => backToLogin()}>
          <Text style={styles.backBtnText}>&#8592;</Text>
        </TouchableOpacity>

        <Image style={styles.headerBarImg} source={require("../assets/goodwill-text-transparent.png")}/>

        <View style={styles.backBtn}/>
      </View>

      <DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <StatusBar style="auto" />

          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to the Goodwill Note App!</Text>
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#7a7a7a"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#7a7a7a"
              onChangeText={(name) => setName(name)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#7a7a7a"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          {/*TODO: Create Confirm Password Field*/}
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm password"
              placeholderTextColor="#7a7a7a"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Position"
              placeholderTextColor="#7a7a7a"
              onChangeText={(position) => setPosition(position)}
            />
          </View>
          <TouchableOpacity style={styles.mainBtn} onPress={() => createAccount()}>
            <Text style={styles.mainBtnText}>Create Account</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </React.Fragment>

  );
}
