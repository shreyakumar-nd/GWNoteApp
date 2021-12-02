import React, { useState, useRef } from "react";
import { User, UserList } from "./Classes/User";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Profile({ navigation }) {
  var user = new User(1, "Test@nd.edu", "password", "user", "dev", 1231221312);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [editable, setEditable] = useState(false);
  const [editButtonText, setEditButtonText] = useState("Edit");
  const editButton = useRef(null);

  function editProfile() {
    if (!editable) {
      setEditable(true);
      setEditButtonText("Save");
    } else {
      setEditable(false);
      setEditButtonText("Edit");
      user.update(name, password, position);
      //run db update function route
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.backButtonContainer}>
      <Button
        style={styles.button}
        title="Go Back"
        onPress={() => navigation.goBack()}
        icon={{
          name: "arrow",
          size: 20,
          color: "white",
        }}
        title="Back"
      />
      </View>
      <View style={styles.container}>
        
        <Text style={styles.text}>Profile</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            defaultValue={user.name}
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(name) => setName(name)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            editable={false}
            style={styles.TextInput}
            defaultValue={user.email}
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            editable={editable}
            secureTextEntry={true}
            defaultValue={user.password}
            placeholderTextColor="white"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            defaultValue={user.position}
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(position) => setPosition(position)}
          />
        </View>
        <TouchableOpacity
          ref={editButton}
          style={styles.enterButton}
          onPress={() => editProfile()}
        >
          <Text>{editButtonText}</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    alignSelf: "stretch",
    height: 20,
    flexDirection: "row", // row
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingTop: 50,
    paddingLeft: 30,
    flex: .05,
  },
  text: {
    color: "black",
    fontSize: 30,
    padding: 20,
  },
  screen:{
    flex: 1,
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
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    fontSize: 20,
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
    fontSize: 20,
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
