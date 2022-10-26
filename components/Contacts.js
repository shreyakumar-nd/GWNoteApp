import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity
} from "react-native";
import { Link } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Contact } from "./Classes/Contact";
import ContactsTopBar from "./ContactsTopBar";
import IndividualContact from "./IndividualContact";

export default function Contacts({ navigation: { navigate } }) {
  const [contacts, setContants] = useState([ 
    {
      index: 0,
      name: "Nicole Mellert"
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
    },
    {
      index: 37,
      name: "Nicole Mellert"
    }

  ])


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