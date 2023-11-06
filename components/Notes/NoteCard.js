import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

export default function NoteCard({ note, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('NoteEditor', {
      note: note
    })}>
      <View style={styles.noteCard}>
        <View style={styles.topBar}>
          {note.level === "Urgent" ? (
            <AntDesign
              style={{ marginRight: 5 }}
              name="star"
              size={24}
              color="red"
            />
          ) : note.level === "Moderately Urgent" ? (
            <AntDesign
              style={{ marginRight: 5 }}
              name="star"
              size={24}
              color="yellow"
            />
          ) : note.level === "Not Urgent" ? (
            <AntDesign
              style={{ marginRight: 5 }}
              name="star"
              size={24}
              color="green"/>
            ) : (
              <Text></Text>
            )}
          <Text
            style={{
              flex: 2,
              fontSize: 30,
              alignSelf: "left",
              color: "#f9c2ff",
            }}
          >
            {note.title}
          </Text>
        </View>
        

        <View style={styles.lowerHalf}>
          <Text style={styles.levelText}>Level: {note.level}</Text>
          <Text style={styles.levelText}>Author: {note.author}</Text>
          <Text style={styles.levelText}>Date: {note.date}</Text>


          
        </View>

        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    margin: 10,
    padding: 10,
    backgroundColor: "#1E2330",
    borderRadius: 8,
    flex: 1,
    flexDirection: "column",
    color: "#fff",
  },

  topBar: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    width: "100%",
    alignItems: "stretch",
  },

  lowerHalf: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
  },

  levelText: {
    fontSize: 28,
    color: "#ECEFF4",
    marginBottom: 5,
  },

  icon: {
    padding: 2,
  },
  notes: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'stretch'
   
  },
});
