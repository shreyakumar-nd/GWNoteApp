import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Button
          style={styles.button}
          title="Logout"
          onPress={() => this.props.navigation.navigate("Login")}
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
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
