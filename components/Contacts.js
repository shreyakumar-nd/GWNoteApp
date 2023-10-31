import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SectionList } from 'react-native';
import axios from 'axios';

const baseApiUrl = 'http://localhost:3000/workers';

const Contacts = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${baseApiUrl}`)
      .then(response => {
        const workersData = response.data;
        setWorkers(workersData);
        setFilteredWorkers(workersData); // Initially, no filter applied
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredWorkers(workers);
    } else {
      const filteredData = workers.filter(worker =>
        worker.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        worker.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWorkers(filteredData);
    }
  }, [searchTerm, workers]);

  const getSortedData = () => {
    let sortedData = [];
    const grouped = filteredWorkers.reduce((groups, worker) => {
      const firstLetter = worker.firstName[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(worker);
      return groups;
    }, {});

    for (let [letter, workersGroup] of Object.entries(grouped)) {
      sortedData.push({
        title: letter,
        data: workersGroup.sort((a, b) => a.firstName.localeCompare(b.firstName)),
      });
    }

    return sortedData;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Worker List</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search workers..."
        value={searchTerm}
        onChangeText={setSearchTerm} // This will trigger the useEffect for filtering
      />

      {error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <SectionList
          sections={getSortedData()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.row}
                onPress={() => {
                  navigation.navigate('IndividualContact', { contactName: `${item.firstName} ${item.lastName}` });
                }}
              >
                <Text>{`${item.firstName} ${item.lastName}`}</Text>
              </TouchableOpacity>

              <View style={styles.separator} />
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          )}
          keyExtractor={(item) => String(item.workerID)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignSelf: "stretch",
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10, 
  },
  sectionHeader: {
    backgroundColor: "#efefef",
    paddingHorizontal: 20,
    paddingVertical: 10, 
  },
  h1: {
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    margin: 20, 
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
  },
});

export default Contacts;
