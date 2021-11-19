import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

export default function NoteEditorEdit({body, editNote, pressHandler}){

    return(
        <View style={styles.outer}>
        <View style={styles.textBody}>
            <TextInput 
                value={body}
                multiline
                onChangeText={(value) => editNote(value)}
            
            />
           
        </View>

        <View style={styles.bottomBar}> 
                <Button 
                    title="Save"
                    onPress={() => {pressHandler()}}
                />
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    
    textBody: {
        backgroundColor: '#ddd',
        padding: 20,
        margin: 2,
        flex: 4,
        marginTop: 20,
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 20,
    },

    outer: {
        flexDirection: 'column',
        flex: 7
    },

    bottomBar: {
        flex: 1
    }
})