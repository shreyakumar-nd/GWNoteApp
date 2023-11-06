import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import NoteCard from './NoteCard'
import { set } from 'react-native-reanimated';

export default function Notes({navigation}){
    const [searchTerm, setSearchTerm] = useState("");




    const [notes, setNotes] = useState([
        {id: '1', date: '1/2/2021', title: 'Move Shoes to Warehouse', body: 'Donation of shoes needs to be relocated to the warehouse.', author: 'Pablo', collabs: [{name: 'James', id: '1'}, {name: 'Shreya', id: '3'}], level: 'Moderately Urgent'},
        {id: '2', date: '3/4/2021', title: 'Sort Clothing Donations', body: 'Please categorize and organize donated clothes.', author: 'Connor', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}], level: 'Not Urgent'},
        {id: '3', date: '6/19/2021', title: 'Display Collectibles', body: 'Unique collectibles for display in the store.', author: 'Yorch', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}], level: 'Moderately Urgent'},
        {id: '4', date: '11/2/2021', title: 'Urgent Supply Request', body: 'Request for urgent supply restocking.', author: 'Morris', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}, {name: 'Bert', id: '4'}], level: 'Urgent'},
        {id: '5', date: '2/7/2022', title: 'Volunteer Scheduling', body: 'Plan schedules for upcoming volunteers.', author: 'Linda', collabs: [], level: 'Not Urgent'},
        {id: '6', date: '5/15/2022', title: 'Donation Pickup Coordination', body: 'Coordinate the pickup of large furniture donations.', author: 'Alex', collabs: [{name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}, {name: 'Bert', id: '4'}], level: 'Not Urgent'},
        {id: '7', date: '9/22/2022', title: 'Event Planning Meeting', body: 'Schedule a meeting to discuss upcoming events.', author: 'Sophia', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}], level: 'Moderately Urgent'},
        {id: '8', date: '12/1/2022', title: 'Inventory Audit', body: 'Conduct an audit of inventory in the store.', author: 'Emily', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Bert', id: '4'}], level: 'Urgent'},
        {id: '9', date: '3/9/2023', title: 'Donation Pickup Request', body: 'Request for a donation pickup from a local donor.', author: 'Aiden', collabs: [{name: 'Shreya', id: '3'}, {name: 'Bert', id: '4'}], level: 'Moderately Urgent'},
        {id: '10', date: '6/18/2023', title: 'Marketing Campaign Meeting', body: 'Discuss and plan a marketing campaign for the organization.', author: 'Mia', collabs: [{name: 'James', id: '1'}, {name: 'Grace', 'id': 2}, {name: 'Shreya', id: '3'}, {name: 'Bert', id: '4'}], level: 'Not Urgent'}
    ]);
    
    

    return(
        <View style={styles.notes}> 
            <TextInput
                style={styles.searchInput}
                placeholder="Search notes..."
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
            />

            <FlatList 
                keyExtractor={(item) => item.id}
                data={notes}
                renderItem={({item}) => (
                    <NoteCard note={item} navigation={navigation}/>
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
        alignItems: 'stretch',
        backgroundColor: '#fff',
    
    },
    searchInput: {
        height: 40,
        width: "80%",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 20,
        
      }

})

