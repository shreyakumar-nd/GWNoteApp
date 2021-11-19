import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import NoteEditorView from './NoteEditorView';
import NoteEditorEdit from './NoteEditorEdit';

export default function NoteEditor({ route, navigation}){

    const [body, setBody] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget sapien condimentum, pulvinar quam sed, aliquet dolor. In sodales risus a sollicitudin interdum. Suspendisse quis arcu eu nulla viverra convallis id nec tellus. Praesent sit amet volutpat turpis. Etiam et fermentum augue. Nunc efficitur fringilla odio et hendrerit. Proin a vulputate ipsum. Vestibulum lacinia magna nec arcu fringilla, non pretium velit finibus. Phasellus congue viverra dictum. Mauris pharetra lorem vel varius blandit. Mauris vehicula, orci et dignissim ultricies, dui nibh tristique nunc, sed placerat ipsum lacus et nulla. Sed malesuada non sapien sit amet imperdiet. In dapibus lorem sit amet.')

    const {note} = route.params

    const [EditMode, setMode] = useState(0)

    const pressHandler = () => {
        setMode( previousMode => {
            return previousMode == 0 ? 1 : 0
        })
    }

    const editNote = (newBody) => {
        setBody(newBody)
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
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


            {EditMode == 0 ?  <NoteEditorView body={body} pressHandler={pressHandler} /> : <NoteEditorEdit body={body} pressHandler={pressHandler} editNote={editNote} /> }
          

            

        </View>
        </TouchableWithoutFeedback >
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
    }

})