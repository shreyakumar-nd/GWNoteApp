import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SectionList } from 'react-native';
import axios from 'axios';


const Map = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>GoodWill Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    margin: 20, 
  },
});

export default Map;
