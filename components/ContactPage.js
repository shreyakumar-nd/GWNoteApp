import React, { useState, useRef } from "react";
import { Contact } from "./Classes/Contact";
import { Avatar } from "react-native-elements";
import NoteCard from "./NoteCard";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
let user = null;
export default function ContactPage({ route, navigation }) {
  const [notes, setNotes] = useState([
    {
      id: "1",
      date: "1/2/2021",
      title: "Note 1",
      body: "lorem ip sem olam",
      author: "Pablo",
      collabs: [
        { name: "James", id: "1" },
        { name: "Shreya", id: "3" },
      ],
      level: "Moderately Urgent",
    },
    {
      id: "2",
      date: "3/4/2021",
      title: "Note 2",
      body: "lorem ip sem olam",
      author: "Connor",
      collabs: [
        { name: "James", id: "1" },
        { name: "Grace", id: 2 },
        { name: "Shreya", id: "3" },
      ],
      level: "Negligible",
    },
    {
      id: "3",
      date: "6/19/2021",
      title: "Note 3",
      body: "lorem ip sem olam",
      author: "Yorch",
      collabs: [
        { name: "James", id: "1" },
        { name: "Grace", id: 2 },
        { name: "Shreya", id: "3" },
      ],
      level: "Incidental",
    },
    {
      id: "4",
      date: "11/2/2021",
      title: "Note 4",
      body: "lorem ip sem olam",
      author: "Morris",
      collabs: [
        { name: "James", id: "1" },
        { name: "Grace", id: 2 },
        { name: "Shreya", id: "3" },
        { name: "Bert", id: "4" },
      ],
      level: "Urgent",
    },
  ]);
  if (route.params.user.address != "") {
    user = route.params.user;
  } else {
    user = new Contact(
      2,
      "Test1@nd.edu",
      "Billy",
      "Smith",
      "9122347890",
      "1349 E Ewing Ave, South Bend, IN 46613",
      "normal",
      "#Group 1",
      "BS",
      "Notes"
    );
  }
 
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactType, setContactType] = useState("");
  const [group, setGroup] = useState("");

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
      user = usr.update(
        user.id,
        email,
        user.firstName,
        user.lastName,
        phoneNumber,
        address,
        contactType,
        group,
        user.initials,
        notes
      );
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
        <Text></Text>
        <Button
          style={styles.button}
          title={editButtonText}
          onPress={() => editContact(user)}
          icon={{
            name: "gear",
            size: 20,
            color: "white",
          }}
          title={editButtonText}
        />
      </View>
      <View style={styles.container}>
        <Avatar
          overlayContainerStyle={{ backgroundColor: "blue" }}
          size="large"
          title={user.initials}
          rounded
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text style={styles.text}>{user.firstName + " " + user.lastName}</Text>
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
      </View>
      <View style={styles.notes}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={notes}
          renderItem={({ item }) => <NoteCard note={item} />}
        ></FlatList>
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
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.2,
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
  screen: {
    flex: 1,
  },
  container: {
    flex: .7,

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
    marginBottom: 10,
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
  notes: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#ffff",
  },
});
