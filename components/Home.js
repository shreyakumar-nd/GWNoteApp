import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}){

    return(

        <View style={styles.button}>
        <Button 
            title="Contacts"
            onPress={ () => 
                navigation.navigate('Contacts')
            }
        />
        <Button 
            title="Notes"
            onPress={ () => 
                navigation.navigate('Notes')
            }
        />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100

    }
})