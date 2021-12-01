import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function ResetPassword({navigation}) {
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function resetPassword() {
    //fetch auth code from db and check if they are the same as user input
    let auth_code = "123456";
    if (authCode != auth_code) {
      alert("Invalid auth code");
    } else if (password != confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Password reset successfully");
      navigation.navigate("Login");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please enter the authorization code sent to your email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Authorization Code..."
          placeholderTextColor="white"    
          onChangeText={(authCode) => setAuthCode(authCode)}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Password..."
          secureTextEntry={true}
          placeholderTextColor="white"    
          onChangeText={(password) => setPassword(password)}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm New Password..."
          secureTextEntry={true}
          placeholderTextColor="white"    
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        />
      </View>
      <TouchableOpacity style={styles.enterButton} onPress={() => resetPassword()}>
        <Text>Enter</Text>
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
  },
  enterButton: {
    width: "20%",
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
