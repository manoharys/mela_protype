import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HeaderItems = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.headerItem}>
      <View style={styles.item}>
        <Image
          style={{
            resizeMode: "contain",
            height: 30,
            width: 30,
            marginRight: 7,
          }}
          source={icon}
        />
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerItem: {
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 40,
    width: 120,
    padding: 8,
    marginLeft: 6,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    color: "#e4e6e1",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 22,
  },
});

export default HeaderItems;
