import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  notes: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'stretch'
  },

  noteCard: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
    flex: 1,
    flexDirection: "column",
  },

  topBar: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    width: "100%",
    alignItems: "stretch",
  },

  lowerHalf: {
    flex: 4,
    alignSelf: "center",
    padding: 5,
    alignItems: "stretch",
    flexDirection: "row",
  },

  levelText: {
    flex: 1,
    alignSelf: "flex-end",
  },

  icon: {
    padding: 2,
  },

});
