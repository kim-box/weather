import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={(styles.texts, styles.orangeBack)}>deadly Hot Weather</Text>
      <Text style={(styles.texts, styles.cyanBack)}>O O O O !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 70,
    paddingVertical: 100,
    backgroundColor: "#ECF6EC",
  },
  texts: {
    color: "#2c2c2c",
    fontSize: 60,
  },
  orangeBack: {
    flex: 1,
    backgroundColor: "orange",
  },
  cyanBack: {
    color: "#2c2c2c",
    fontSize: 60,
    flex: 1,
    backgroundColor: "cyan",
  },
});
