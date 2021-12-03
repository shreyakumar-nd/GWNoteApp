import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";
import * as Linking from 'expo-linking';

export default function Resources({ navigation }) {
  const resourceLinks = [
    { name: "Local Resources" },
    { name: "Support Documentation" },
    { name: "Goodwill Personnel" },
  ]

  const handlePress = (resource) => {
    let link;

    if (resource == 'Local Resources') {
      link = 'https://southbendin.gov/covid-19-resources-support/';
    } else if (resource == 'Support Documentation') {
      link = 'https://southbendin.gov/covid-19-resources-support/';
    } else if (resource == 'Goodwill Personnel') {
      link = 'https://goodwill-ni.org/contact/';
    }

    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.name}
        data={resourceLinks}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => handlePress(item.name)}>
              <Text style={{fontSize: 20, alignSelf: 'center'}}>{item.name}</Text>
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
    marginTop: 25,
    padding: 30,
    backgroundColor: "#ddd",
    width: '90%', 
    alignSelf: 'center'
  },
});