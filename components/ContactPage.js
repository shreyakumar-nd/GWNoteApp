import React, { useState, useRef } from "react";
import { Contact} from "./Classes/Contact";
import { Avatar } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
let user = null;
export default function ContactPage({route, navigation}) {
  if(route.params.user.address != ""){
    user = route.params.user;
  } else{
    user = new Contact(2, "Test1@nd.edu", "Billy", "Smith", 9122347890, "1349 E Ewing Ave, South Bend, IN 46613","normal", "#Group 1", "BS", "Notes");
  }
  console.log(user);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactType, setContactType] = useState("");
  const [group, setGroup] = useState("");
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState("");
  const [editable, setEditable] = useState(false);
  const [editButtonText, setEditButtonText] = useState("Edit");
  const editButton = useRef(null);

  function editContact(usr) {
    if (!editable) {
      setEditable(true);
      setEditButtonText("Save");
    } else {
      setEditable(false);
      setEditButtonText("Edit");
      console.log(user);
      user = usr.update(user.id, email, user.firstName, user.lastName, phoneNumber, address, contactType, group, user.initials, notes);
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
      <Avatar
      overlayContainerStyle={{backgroundColor:'blue' }}
      size="large"
      title={user.initials}
      
      rounded
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
/>
        <Text style={styles.text}>{user.firstName + ' ' + user.lastName}</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            defaultValue={user.email}
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            editable={false}
            editable={editable}
            style={styles.TextInput}
            defaultValue={user.phoneNumber}
            placeholderTextColor="white"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            editable={editable}
            defaultValue={user.address}
            placeholderTextColor="white"
            onChangeText={(address) => setAddress(address)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            defaultValue={user.contactType}
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(contactType) => setContactType(contactType)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            defaultValue={user.group}
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(group) => setGroup(group)}
          />
        </View>
        <TouchableOpacity
          ref={editButton}
          style={styles.enterButton}
          onPress={() => editContact(user)}>
          <Text>{editButtonText}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Notes:</Text>
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
  avatar: {
    color: "black",
    backgroundColor: "gray",
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
    marginTop: 10,
    backgroundColor: "#009dff",
  },

  headerText: {
    fontSize: 20,
    color: "black",
    padding: 20,
  },
});
