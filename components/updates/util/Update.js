import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Update = ({ updateText, updateSubText, updateBanner }) => {
  const fatArrow = require("../../../assets/bodyImg/fatArrow.png");
  const coins = require("../../../assets/bodyImg/coins.png");
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.img} source={fatArrow} />
        <Text style={styles.updateBanner}>{updateBanner}</Text>
        <Image style={styles.coinImg} source={coins} />
        <Text style={styles.updateText}>{updateText}</Text>
        <Text style={styles.updateTextSub}>{updateSubText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    marginTop: 100,
    width: 400,
    height: 50,
  },
  updateText: {
    color: "#e4e6e1",
    position: "absolute",
    top: 109,
    fontSize: 20,
    left: 20,
    fontWeight: "bold",
  },
  updateTextSub: {
    color: "#e4e6e1",
    position: "absolute",
    top: 130,
    left: 20,
    fontSize: 13,
    fontWeight: "100",
  },
  updateBanner: {
    position: "absolute",
    top: 85,
    left: 20,
    color: "#ffa300",
    textShadowColor: "#e53838",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 6,
    fontSize: 20,
    fontWeight: "bold",
  },
  coinImg: {
    position: "absolute",
    top: 80,
    zIndex: -1,
    left: 280,
  },
});

export default Update;
