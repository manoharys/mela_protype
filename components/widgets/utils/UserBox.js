import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const UserBox = ({ text, subText, image, background }) => {
  return (
    <View style={{ backgroundColor: background }} style={styles.mainContainer}>
      <View>
        <Text>{text}</Text>
        <Text>{subText}</Text>
      </View>
      <View>
        <Image source={image} />
      </View>
    </View>
  );
};

export default UserBox;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: 200,
    height: 100,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#d93f98",
    justifyContent: "space-between",
  },
});
