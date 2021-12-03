import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your email address to reset your password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email..."
          placeholderTextColor="white"    
          onChangeText={(email) => setEmail(email)}
        />
        </View>
        <TouchableOpacity style={styles.resetPasswordEmailButton} onPress={() => resetPasswordEmail()}>
        <Text >Enter</Text>
      </TouchableOpacity>
      </View>
    
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: "80%",
    height: "50%",
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
    color: "white",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    textAlign: "center",
  },
  resetPasswordEmailButton: {
    width: "20%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#009dff",
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
  headerText: {
    fontSize: 20,
    color: "black",
    padding: 20,
  },
});
