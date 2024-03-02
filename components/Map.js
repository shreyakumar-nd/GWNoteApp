import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import addressData from '../assets/dummyaddress.json';

const Map = ({ navigation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    addressData.forEach(location => {
      axios.get(`http://api.positionstack.com/v1/forward`, {
        params: {
          access_key: '057291021b74a9fd7f98119fb10b648e', 
          query: location.address,
          output: 'json'
        }
      })
      .then(response => {
        setLocations(prev => [...prev, { ...location, coords: response.data }]);
      })
      .catch(error => {
        console.error('Error fetching geocoded data:', error);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>GoodWill Map</Text>
      {locations.map((location, index) => (
        <Text key={index}>{location.name}: {location.coords.latitude}, {location.coords.longitude}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    margin: 20, 
  },
});

export default Map;
