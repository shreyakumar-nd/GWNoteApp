import React, { useState, useRef, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddContact({ navigation }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [workerID, setWorkerID] = useState(null);
  const [editable, setEditable] = useState(true);

  useEffect(() => {
    const fetchWorkerCount = async () => {
      try {
        const response = await fetch("http://localhost:3000/count-workers");
        if (response.ok) {
          const jsonResponse = await response.json();
          setWorkerID(jsonResponse.count + 1);
        } else {
          console.error("Failed to fetch worker count");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchWorkerCount();
  }, []);

  async function saveContact() {
    
    if (workerID === null) {
      console.error("workerID not fetched");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workerID,
          email,
          firstName,
          lastName,
          affiliation,
          phoneNumber,
        }),
      });

      if (response.ok) {
        navigation.goBack();
      } else {
        console.error("Failed to add worker");
      }
    } catch (error) {
      console.error("Error:", error);
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
        />
      </View>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="First name"
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Last name"
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(lastName) => setLastName(lastName)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
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
            placeholder="Phone Number"
            placeholderTextColor="white"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Affiliation"
            editable={editable}
            placeholderTextColor="white"
            onChangeText={(affiliation) => setAffiliation(affiliation)}
          />
        </View>
        <TouchableOpacity
          style={styles.enterButton}
          onPress={() => saveContact()}
        >
          <Text>Save</Text>
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
    flex: 0.05,
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
