import React, { userState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from "react-native";
import {styles} from "../assets/StyleSheet";
import MapView from 'react-native-maps';


export default function Map({ navigation }) {

  function backToHome() {
    navigation.navigate("Home")
  }

  return (
    <React.Fragment>
        <MapView
          style={styles.mainMapView}
          showsUserLocation
          initialRegion={{
            latitude: 41.6764,
            longitude: -86.2520,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421}}
        />
    </React.Fragment>
  );
}
