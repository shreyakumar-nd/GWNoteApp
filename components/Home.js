import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  FlatList,
  Button,
} from "react-native";
import { Link } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import MapView from 'react-native-maps';
import { styles } from "../assets/StyleSheet";

export default function Home({ navigation }) {
  const [pages, setPages] = useState([
    { name: "Contacts", key: "1" },
    { name: "Notes", key: "2" },
    { name: "Resources", key: "3" },
  ]);

  function toMaps() {
    navigation.navigate("Map");
  }


  return (
    <React.Fragment>
      <View style={styles.containerHome}>
        <TopBar navigation={navigation}></TopBar>
        <TouchableOpacity style={styles.mapContainer}
          activeOpacity='.7'>
          <MapView
            style={styles.mapView}
            onPress={() => toMaps()}
            showsUserLocation
            initialRegion={{
              latitude: 41.6764,
              longitude: -86.2520,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421}}
          />
        </TouchableOpacity>
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
    </React.Fragment>
  );
}
