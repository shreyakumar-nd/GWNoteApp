import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function IndividualContact({ route }) {
    // Extract the contact details from route params
    const { contactName, email, affiliation, phone } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.contactHeader}>
                {/* Placeholder image for contact - replace with actual image path if available */}
                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.contactImage} />
                <Text style={styles.nameText}>{contactName}</Text>
            </View>
            <View style={styles.contactInfo}>
                <Text style={styles.contactText}>Email: {email}</Text>
                <Text style={styles.contactText}>Affiliation: {affiliation}</Text>
                <Text style={styles.contactText}>Phone: {phone}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    contactHeader: {
        backgroundColor: 'blue',
        paddingTop: 50,
        paddingBottom: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
    },
    nameText: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
    },
    contactImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: 'white',
    },
    contactInfo: {
        padding: 20,
    },
    contactText: {
        fontSize: 18,
        color: 'black',
        paddingVertical: 10,
    },
});
