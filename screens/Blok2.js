import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const Blok2 = (props) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../assets/blok2.png")} />
      <Text style={styles.title}>Blok 2</Text>
      <Text style={styles.text}>
        In het tweede blok ben ik bezig geweest met het leerdoel react-native. Dit is een programmeer taal waar je mobiele apps
        kan maken voor ios en android. Zo is ook deze app gemaakt met react-native. Ik vond dit een lastig leerdoel, omdat ik nog
        geen ervaring had met React, maar uiteindelijk ben ik er toch uitgekomen.
      </Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

Blok2.navigationOptions = {
  headerTitle: "Blok 2"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: "cover"
  },
  title: {
    fontWeight: "bold"
  },
  text: {
    paddingHorizontal: 15
  }
});

export default Blok2;
