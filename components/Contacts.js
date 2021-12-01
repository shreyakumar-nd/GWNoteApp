import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Contact } from "./Classes/Contact";
import ContactsTopBar from "./ContactsTopBar";

export default function Contacts({navigation}) {
//id, email, firstName, lastName, phoneNumber, address, contactType, group, initials, notes
  var contact4 = new Contact(1, "Test@nd.edu", "John", "Smith", '9789876123', "21265 Forest Glen Dr, South Bend, IN 46628","normal", "#Group 1", "JS", "Notes");
  var contact = new Contact(2, "Test1@nd.edu", "Billy", "Smith", '9122347890', "1349 E Ewing Ave, South Bend, IN 46613","normal", "#Group 1", "BS", "Notes");
  var contact1 = new Contact(3, "Test2@nd.edu", "Fred", "Smith", '7718655634', "22222 Sandy Hill Ln, South Bend, IN 46628","normal", "#Group 1", "FS", "Notes");
  var contact5 = new Contact(4, "Test3@nd.edu", "Jon", "Jones", '7655390461', "1029 Sherman Ave, South Bend, IN 46616","normal", "#Group 2", "JJ", "Notes");
  var contact6 = new Contact(5, "Test4@nd.edu", "Mike", "Slone", '3603102391', "1111 Kinyon St, South Bend, IN 46616","normal", "#Group 3", "MS", "Notes");
  var contact2 = new Contact(6, "Test5@nd.edu", "Henry", "Gerald", '7677074268', "720 Cherry Tree Ln, South Bend, IN 46617","normal", "#Group 4", "HG", "Notes");
  var contact7 = new Contact(7, "Test6@nd.edu", "Ron", "Hopps", '3439153346', "NA","normal", "#Group 5", "RH", "Notes");
  var contact3 = new Contact(8, "Test7@nd.edu", "Jimmy", "Johns", '2137405589', "NA","normal", "#Group 2", "JJ", "Notes");

  


  const [contacts, setContacts] = useState([
    { name: contact.firstName + " " + contact.lastName, key: "1", user: contact },
    { name: contact1.firstName + " " + contact1.lastName, key: "2" , user: contact1},
    { name: contact2.firstName + " " + contact2.lastName, key: "3", user: contact2},
    { name: contact3.firstName + " " + contact3.lastName, key: "4", user: contact3},
    { name: contact4.firstName + " " + contact4.lastName, key: "5", user: contact4 },
    { name: contact5.firstName + " " + contact5.lastName, key: "6" , user: contact5},
    { name: contact6.firstName + " " + contact6.lastName, key: "7", user: contact6},
    { name: contact7.firstName + " " + contact7.lastName, key: "8", user: contact7},
  ]);
  return (
    <View style={styles.container}>
      <ContactsTopBar navigation={navigation}></ContactsTopBar>
        <FlatList 
          keyExtractor={(item) => item.key}
          data={contacts}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactPage', {user:item.user})}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  button: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "#ddd",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
