import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Link } from "@react-navigation/native";

export default function Contacts({ navigation: { navigate } }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/workers")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error(error));
  }, []);

  const getData = () => {
    let contactsArr = [];
    let aCode = "A".charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currChar = String.fromCharCode(aCode + i);
      let obj = {
        title: currChar,
      };

      let currContacts = contacts.filter((item) => {
        return item.firstName[0].toUpperCase() === currChar;
      });
      if (currContacts.length > 0) {
        currContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
        obj.data = currContacts;
        contactsArr.push(obj);
      }
    }

    return contactsArr;
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.addWorkerButton}
        onPress={() => navigate("AddContact")}
      >
        <Text style={styles.addWorkerButtonText}>Add Worker</Text>
      </TouchableHighlight>
      <SectionList
        sections={getData()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigate("IndividualContact", { worker: item })}
            >
              <View style={styles.contact}>
                <View style={styles.ellipse} />
                <Text style={styles.name}>
                  {item.firstName} {item.lastName}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.workerID.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    paddingLeft: 20,
    paddingRight: 38,
    paddingTop: 62,
    paddingBottom: 40,
  },
  addWorkerButton: {
    backgroundColor: "#2196F3",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  addWorkerButtonText: {
    color: "#FFF",
    fontSize: 14,
  },
  row: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 15,
  },
  ellipse: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 30,
    backgroundColor: "rgba(217,217,217,1)",
  },
  name: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "500",
  },
  separator: {
    width: "90%",
    alignSelf: "center",
    height: 1,
    backgroundColor: "#efefef",
  },
  sectionHeader: {
    backgroundColor: "#efefef",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

