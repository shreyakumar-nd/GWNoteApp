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


export default function Home({ navigation }) {
  const [pages, setPages] = useState([
    { name: "Contacts", key: "1" },
    { name: "Notes", key: "2" },
    { name: "Resources", key: "3" },
  ]);

  return (
    <View>
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
  button: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "#ddd",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
