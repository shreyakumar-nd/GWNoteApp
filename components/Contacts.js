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
import { User, UserList } from "./Classes/User";

export default function Contacts({navigation}) {
  var user = new User(1, "Test@nd.edu", "password", "John Smith", "dev", 1231221312, "JS");
  var user1 = new User(2, "Test1@nd.edu", "password", "Henry Jones", "dev", 1231221312, "HJ");
  var user2 = new User(3, "Test2@nd.edu", "password", "Kyle Kones", "dev", 1231221312, "KK");
  var user3 = new User(4, "Test3@nd.edu", "password", "Anna Smith", "dev", 1231221312, "AS");
  var user4 = new User(5, "Test4@nd.edu", "password", "Jon Slone", "dev", 1231221312, "JS");
  var user5 = new User(6, "Test5@nd.edu", "password", "user5", "dev", 1231221312, "U");
  var user6 = new User(7, "Test6@nd.edu", "password", "user6", "dev", 1231221312, "U");
  var user7 = new User(8, "Test7@nd.edu", "password", "user7", "dev", 1231221312, "U");

  const [contacts, setContacts] = useState([
    { name: user.name, key: "1", user: user },
    { name: user1.name, key: "2" , user: user1},
    { name: user2.name, key: "3", user: user2},
    { name: user3.name, key: "4", user: user3},
    { name: user4.name, key: "5", user: user4 },
    { name: user5.name, key: "6" , user: user5},
    { name: user6.name, key: "7", user: user6},
    { name: user7.name, key: "8", user: user7},
  ]);
  return (
    <View style={styles.container}>
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
