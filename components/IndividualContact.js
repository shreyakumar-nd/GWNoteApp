import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity
} from "react-native";

export default function IndividualContact({ navigation, route }) {
    // Extract contactName from route params
    const { contactName } = route.params;

    return (
        <View style={styles.container}>
            {/* Display the contact's name */}
            <Text style={styles.nameText}>{contactName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        alignSelf: "stretch",
        justifyContent: "center",  // Center content vertically
        alignItems: "center"       // Center content horizontally
    },
    nameText: {
        fontSize: 24,
        color: "white"
    }
});
