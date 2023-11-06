import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function NoteEditorEdit({ body, editNote, pressHandler }) {
  return (
    <View style={styles.outer}>
      <View style={styles.textBody}>
        <TextInput
          style={styles.input}
          placeholder="Edit your note here"
          value={body}
          multiline
          onChangeText={(text) => editNote(text)}
        />
      </View>

      <View style={styles.bottomBar}>
        <Button title="Save" onPress={pressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBody: {
    padding: 20,
    margin: 10, // Increased margin for better spacing
    flex: 1, // Adjusted the flex value for more balanced layout
    borderWidth: 2, // Slightly reduced the border width
    borderColor: 'green',
    borderRadius: 10, // Reduced border radius
    backgroundColor: "#1E2330",
    color: '#FFFFFF',
  },

  input: {
    flex: 1,
    fontSize: 16, // Increased font size for better readability
    color: '#FFFFFF',
  },

  outer: {
    flexDirection: 'column',
    flex: 1, // Balanced the flex values for a more even layout
    padding: 20, // Added padding for consistency
    backgroundColor: "#1E2330",
  },

  bottomBar: {
    flex: 0.2, // Adjusted the flex value for the bottom bar
    justifyContent: 'center', // Center the button vertically
  },
});
