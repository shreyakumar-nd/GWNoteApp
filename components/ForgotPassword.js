import React from "react";
import { useState } from "react";
import { styles } from "../assets/StyleSheet.js"
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

// Dismiss the Keyboard by touching anywhere on the screen using
// the TouchableWithoutFeedback and Keyboard package to create a handler component
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState("");
  function resetPasswordEmail() {
    //add route to email a reset auth code for user to enter when updating password
    if(email.length > 0){
    alert("Password reset email sent to " + email);
    navigation.navigate("ResetPassword");
    } else {
      alert("Please enter your email");
    }
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
        <KeyboardAvoidingView style={styles.container}>
          <Text style={styles.headerText}>Enter your email address</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#7a7a7a"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <TouchableOpacity style={styles.mainBtn} onPress={() => resetPasswordEmail()}>
              <Text style={styles.mainBtnText}>Enter</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </DismissKeyboard>
      </React.Fragment>

  );
}
