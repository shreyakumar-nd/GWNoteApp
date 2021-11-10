import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import NoteEditorView from './NoteEditorView';
import NoteEditorEdit from './NoteEditorEdit';

export default function NoteEditor({ route, navigation}){

    const {note} = route.params

    const [EditMode, setMode] = useState(0)

    const pressHandler = () => {
        setMode( previousMode => {
            return previousMode == 0 ? 1 : 0
        })
    }

    return(
        <View style={styles.main}>
            
            <View style={styles.header}>
                <View style={{ alignSelf: 'flex-start'}}>
                    <Button
                        title="Back"
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <Text style={styles.titleText}>{note.title}</Text>
            </View>


            {EditMode == 0 ?  <NoteEditorView note={note} /> : <NoteEditorEdit note={note} /> }
          

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
    main : {
        flex: 1,
        backgroundColor: '#eee',
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: 8,
        justifyContent: 'flex-start'
    },

    header: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },


    titleText: {
        fontSize: 30
    },


    bottomBar: {
        flex: 1
    }

})