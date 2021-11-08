import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
        <Text>TopBar</Text>
        <Button
          icon={{
            name: "FaDoorOpen",
            size: 15,
            color: "white",
          }}
          title="Button with icon object"
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
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
