import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import NoteEditorView from './NoteEditorView';
import NoteEditorEdit from './NoteEditorEdit';
import { AntDesign } from '@expo/vector-icons';

export default function NoteEditor({ route, navigation }) {
  const { note } = route.params;
  const [body, setBody] = useState(note.body);
  const [editMode, setEditMode] = useState(false);

  const pressHandler = () => {
    setEditMode((previousMode) => !previousMode);
  };

  const editNote = (newBody) => {
    setBody(newBody);
  };

  const renderStar = () => {
    let starColor = 'black';

    if (note.level === 'Urgent') {
      starColor = 'red';
    } else if (note.level === 'Moderately Urgent') {
      starColor = 'yellow';
    } else if (note.level === 'Not Urgent') {
      starColor = 'green';
    }

    return <AntDesign name="star" size={24} color={starColor} />;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.header}>
            <View style={styles.button}>
              <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
            <Text style={styles.titleText}>{note.title}</Text>
              <View style={styles.headerRowContent}>
                {renderStar()}
                <Text style={styles.levelText}>{note.level}</Text>
              </View>
            <Text style={styles.dateText}>{note.date}</Text>
          </View>
          <View style={styles.body}>
            {editMode ? (
                <NoteEditorEdit note={note} editNote={editNote} />
            ) : (
                <NoteEditorView note={note} body={body} />
            )}
            </View>

        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    margin: 30,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  headerRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    margin: 3,
  },
  levelText: {
    fontSize: 27,
    marginLeft: 5, // Adjust the margin as needed
  },
  dateText: {
    fontSize: 25,
  },
  body: {
    flex: 4,
    margin: 70,
  },

});
