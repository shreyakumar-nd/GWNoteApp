import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import NoteCard from './NoteCard'

export default function Notes(){

    const [notes, setNotes] = useState([
        {id: '1', date: '1/2/2021', title: 'Note 1', body: 'lorem ip sem olam', author: 'Pablo', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}], level: 'Moderately Urgent'},
        {id: '2', date: '3/4/2021', title: 'Note 2', body: 'lorem ip sem olam', author: 'Connor', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}], level: 'Negligible'},
        {id: '3', date: '6/19/2021', title: 'Note 3', body: 'lorem ip sem olam', author: 'Yorch', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}], level: 'Incidental'},
        {id: '4', date: '11/2/2021', title: 'Note 4', body: 'lorem ip sem olam', author: 'Morris', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}], level: 'Urgent'}
    ])

    return(
        <View style={styles.notes}> 

            <FlatList 
                keyExtractor={(item) => item.id}
                data={notes}
                renderItem={({item}) => (

                    <NoteCard note={item}/>
                )}
            >
                
            </FlatList>
           
        </View>
    )
}

const styles = StyleSheet.create({
    notes: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'stretch'
       
    
    }
})