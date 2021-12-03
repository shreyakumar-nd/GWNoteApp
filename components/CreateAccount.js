import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { User, UserList } from "./Classes/User";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {styles} from "../assets/StyleSheet";

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
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Goodwill Note App please fill out the fields below and press Create Account</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your email..."
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password..."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="white"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Position"
          placeholderTextColor="white"
          onChangeText={(position) => setPosition(position)}
        />
      </View>
      <TouchableOpacity onPress={() => createAccount()}>
        <Text style={styles.forgot_button}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

