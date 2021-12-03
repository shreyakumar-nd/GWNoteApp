import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity
} from "react-native";

import IndividualContact from "./IndividualContact";

export default function Contacts({ navigation: { navigate } }) {
  const [contacts, setContants] = useState([ 
    {
      index: 0,
      name: "Danny Sullivan"
    },
    {
      index: 1,
      name: "Jesse Hooper"
    },
    {
      index: 2,
      name: "Reid Zavala"
    },
    {
      index: 3,
      name: "Milo Alvarado"
    },
    {
      index: 4,
      name: "Tiara Hinton"
    },
    {
      index: 5,
      name: "Zion Bowers"
    },
    {
      index: 6,
      name: "Rebekah Case"
    },
    {
      index: 7,
      name: "Landin Landry"
    },
    {
      index: 8,
      name: "Nevaeh Hicks"
    },
    {
      index: 9,
      name: "Shyanne Kerr"
    },
    {
      index: 10,
      name: "Yaretzi Bryan"
    },
    {
      index: 11,
      name: "Ramos Bauer"
    },
    {
      index: 12,
      name: "Humberto Lester"
    },
    {
      index: 13,
      name: "Sienna Knight"
    },
    {
      index: 14,
      name: "Allen Jensen"
    },
    {
      index: 15,
      name: "Shaniya Wood"
    },
    {
      index: 16,
      name: "Brielle Pacheco"
    },
    {
      index: 17,
      name: "Mira Fry"
    },
    {
      index: 18,
      name: "Rachel Beck"
    },
    {
      index: 19,
      name: "Lina Bowers"
    },
    {
      index: 20,
      name: "Vance Nichols"
    },
    {
      index: 21,
      name: "Elian Herring"
    },
    {
      index: 22,
      name: "Kristin Estes"
    },
    {
      index: 23,
      name: "Trevor Beasley"
    },
    {
      index: 24,
      name: "Weston Haynes"
    },
    {
      index: 25,
      name: "Dayton Ferguson"
    },
    {
      index: 26,
      name: "Gemma Harper"
    },
    {
      index: 27,
      name: "Jordan Frye"
    },
    {
      index: 28,
      name: "Charlie Tyler"
    },
    {
      index: 29,
      name: "Maeve Graves"
    },
    {
      index: 30,
      name: "Ronan Mills"
    },
    {
      index: 31,
      name: "Donovan Riddle"
    },
    {
      index: 32,
      name: "Matteo Zuniga"
    },
    {
      index: 33,
      name: "Denise Booth"
    },
    {
      index: 34,
      name: "Audrey Mill"
    },
    {
      index: 35,
      name: "Austin Humphrey"
    },
    {
      index: 36,
      name: "Amy Hills"
    }

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

  const getData = () => {
    let contactsArr = [];
    let aCode = "A".charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currChar = String.fromCharCode(aCode + i);
      let obj = {
        title: currChar
      };

      let currContacts = contacts.filter(item => {
        return item.name[0].toUpperCase() === currChar;
      });
      if (currContacts.length > 0) {
        currContacts.sort((a, b) => a.name.localeCompare(b.name));
        obj.data = currContacts;
        contactsArr.push(obj);
      }
    }

    return contactsArr;
  };

  return(
    <View style={styles.container}>

      <SectionList
        sections={getData()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.row} onPress={() => navigate('IndividualContact')}>
              <Text>{item.name}</Text>

      <ContactsTopBar navigation={navigation}></ContactsTopBar>
        <FlatList 
          keyExtractor={(item) => item.key}
          data={contacts}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactPage', {user:item.user})}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
            <View style={{width: '90%', alignSelf: 'center', height: 1, backgroundColor: '#efefef'}}/> 
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
        keyExtractor={item => item.index}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10, 
  },
  sectionHeader: {
    backgroundColor: "#efefef",
    paddingHorizontal: 20,
    paddingVertical: 10, 
  }
});