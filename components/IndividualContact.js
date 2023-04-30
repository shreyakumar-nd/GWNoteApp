import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndividualContact = ({ route }) => {
  const { worker } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name}>
          {worker.firstName} {worker.lastName}
        </Text>
        <Text style={styles.affiliation}>{worker.affiliation}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{worker.email}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{worker.phone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 62,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(217,217,217,1)',
  },
  name: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '500',
    marginTop: 10,
  },
  affiliation: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: '500',
    color: 'rgba(30,35,48,1)',
    marginTop: 5,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  info: {
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: 'rgba(30,35,48,0.8)',
  },
  value: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: 'rgba(30,35,48,1)',
  },
});

export default IndividualContact;


