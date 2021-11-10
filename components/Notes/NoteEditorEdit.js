import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

export default function NoteEditorEdit({note}){

    return(
        <View style={styles.textBody}>
            <TextInput 
                value={note.body}
                multiline
               
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    textBody: {
        backgroundColor: '#ddd',
        padding: 10,
        margin: 10,
        flex: 7,
        marginTop: 20,
        borderWidth: 3,
        borderColor: 'green'
    }
})