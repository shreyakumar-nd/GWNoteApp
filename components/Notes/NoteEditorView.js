import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function NoteEditorView({note}){

    return(
        <View style={styles.textBody}>
            <ScrollView>
            <Text style={{fontSize: 20}}>{note.body}</Text>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    
    textBody: {
        backgroundColor: '#ddd',
        padding: 10,
        margin: 10,
        flex: 7,
        marginTop: 20
    }
})