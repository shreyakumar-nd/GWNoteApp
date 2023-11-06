import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function NoteEditorView({body, pressHandler}){

    return(

        <View style={{flex: 6, flexDirection: 'column'}}>
    
            <View style={styles.textBody}>
                <ScrollView>
                    <Text style={styles.text}>{body}</Text>
                </ScrollView>
            </View>

            <View style={styles.bottomBar}> 
                <Button 
                title="Edit"
                onPress={() => {pressHandler()}}
                />
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    
    textBody: {
        backgroundColor: "#1E2330",
        fontColor: '#FFFFFF',
        padding: 20,
        margin: 2,
        flex: 5,
        marginTop: 20,
        borderRadius: 20,
        
    },

    bottomBar: {
       flex: 1
    },

    text: {
        color: '#ddd',
        fontSize: 20,
    }
})