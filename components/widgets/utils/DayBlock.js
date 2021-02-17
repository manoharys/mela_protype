import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DayBlock = ({ block }) => {
  return (
    <View style={styles.square}>
      <Text style={styles.squareText}>{block}</Text>
    </View>
  );
};

export default DayBlock;

const styles = StyleSheet.create({
  square: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    borderRadius: 4,
  },
  squareText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
