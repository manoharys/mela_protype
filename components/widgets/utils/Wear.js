import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Wear = ({ dressName, image }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.img} />
          <Text style={styles.dressName}>{dressName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Wear;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    zIndex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 160,
    borderRadius: 20,
  },
  btn: {
    fontSize: 16,
    color: "#fff9",
    fontWeight: "bold",
  },
  dressName: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
    fontSize: 14,
  },
});
