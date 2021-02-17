import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WaveTextUpdate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        10,000+ <Text style={styles.innerText}>New Styles</Text> Just Launched
      </Text>
      <Image
        style={styles.img}
        source={require("../../../assets/bodyImg/waves.png")}
      />
    </View>
  );
};

export default WaveTextUpdate;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffff",
  },
  innerText: {
    color: "#fdfb03",
    fontStyle: "italic",
  },
  img: {
    marginLeft: -70,
  },
});
