import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import icon from "react-native-vector-icons/FontAwesome";

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
          icon={{
            name: "person",
            size: 20,
            color: "white",
          }}
          title="Profile"
        />
        <Text></Text>
        <Button
          style={styles.button}
          title="Logout"
          onPress={() => this.props.navigation.popToTop()}
          icon={{
            name: "logout",
            size: 20,
            color: "white",
          }}
          title="Logout"
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

export default TopBar;
