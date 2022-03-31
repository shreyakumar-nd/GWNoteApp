import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: .89,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: "80%",
    height: "50%",
  },

  inputView: {
    backgroundColor: '#f2f2f2',
    borderColor: '#e0e0e0',
    borderRadius: 8,
    borderWidth: 1,
    width: "70%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    borderRadius: 8,
    borderColor: '#e0e0e0',
    paddingLeft: 12,
    marginLeft: 0,
    width: "100%",
    textAlign: "left",
    color: "black",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  mainBtn: {
    width: "70%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#01529c",
  },

  mainBtnText: {
    color: "white",
    fontWeight: "bold",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    padding: 20,
  },

  backBtn: {
    alignSelf: "flex-end",
    flex: 1,
    marginHorizontal: "5%",
    marginBottom: "3%",
    zIndex: 3,
  },

  backBtnText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },

  headerBar: {
    height: "11%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    backgroundColor: "#01529c",
    zIndex: 1,
    flexDirection: "row"
  },

  headerBarImg: {
    zIndex: 2,
    width: 150,
    height: 150,
    marginTop: "8%",
    resizeMode: 'contain',
    alignSelf: "center",
  },

  mapContainer: {
    flex: 5,
    margin: "5%",
    borderRadius: 8
  },

  mapView: {
    flex: 1,
    borderRadius: 8,
    zIndex: 1
  },

  mainMapView: {
    flex: 1
  },

  containerHome: {
    backgroundColor: "white",
    flex: 1
  },

  button: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "#ddd",
    fontSize: 24,
    marginHorizontal: 10,
  },

});
