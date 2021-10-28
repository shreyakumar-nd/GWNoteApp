import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}){

    return(

        <View style={styles.button}>
        <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100

    }
})