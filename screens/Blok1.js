import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const Blok1 = (props) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../assets/blok1.png")} />
      <Text style={styles.title}>Blok 1</Text>
      <Text style={styles.text}>
        In het eerste blok van de minor ben ik mij bezig gaan houden met het ontwerpen van een mobiele app met behulp van design
        patterns. Allereerst ben ik aan de slag gegaan met uitzoeken welke patterns ik kan gebruiken en vooral hoe ik die kan
        gebruiken. Uiteindelijk ben ik tot een mooi ontwerp gekomen voor een app voor het bedrijf Barcelonete.
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

Blok1.navigationOptions = {
  headerTitle: "Blok 1"
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

export default Blok1;
