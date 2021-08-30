import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BlokScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.tile}
        onPress={() => {
          props.navigation.navigate({ routeName: "Blok1" });
        }}
      >
        <Text>Blok 1</Text>
        <Text>Description</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tile}
        onPress={() => {
          props.navigation.navigate({ routeName: "Blok2" });
        }}
      >
        <Text>Blok 2</Text>
        <Text>Description</Text>
      </TouchableOpacity>
    </View>
  );
};

BlokScreen.navigationOptions = {
  headerTitle: "Minor KB86"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  tile: {
    padding: 15,
    margin: 10,
    height: 150,
    width: 350,
    borderRadius: 15,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.26,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default BlokScreen;
