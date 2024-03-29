import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link } from "@react-navigation/native";
import TopBar from "../components/TopBar";

export default function Home({ navigation }) {
  const [pages, setPages] = useState([
    { name: "Contacts", key: "1" },
    { name: "Notes", key: "2" },
    { name: "Resources", key: "3" },
    { name: "Map", key: "4"},
    { name: "TestPage", key: "5"}
  ]);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation}></TopBar>
      <FlatList
        keyExtractor={(item) => item.key}
        data={pages}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Link style={styles.button} to={{ screen: item.name }}>
              <Text>{item.name}</Text>
            </Link>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white", 
    flex: 1
  },
  button: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "#1E2330",
    fontSize: 24,
    color: "white",
    marginHorizontal: 10,
    borderRadius: 10,
  },
});