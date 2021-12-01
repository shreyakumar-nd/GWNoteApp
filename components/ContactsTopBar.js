import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import icon from "react-native-vector-icons/FontAwesome";
// for contacts page
class ContactsTopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Button
          style={styles.button}
          title="Add"
          onPress={() => this.props.navigation.navigate("AddContact")}
          icon={{
            name: "plus-one",
            size: 20,
            color: "white",
          }}
          title="Add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row", // row
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default ContactsTopBar;
