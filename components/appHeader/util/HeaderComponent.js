import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HeaderComponent = ({ icon, text, span }) => {
  const value = 2;
  return (
    <View style={styles.HeaderComponent}>
      <Image source={icon} />
      {span && (
        <View style={styles.qty}>
          <Text style={styles.qtyText}>{value}</Text>
        </View>
      )}
      <Text style={styles.HeaderText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderComponent: {
    justifyContent: "center",
    alignItems: "center",
  },
  qty: {
    width: 10,
    height: 10,
    backgroundColor: "#e53838",
    position: "absolute",
    left: 30,
    top: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    color: "#ffff",
    fontSize: 10,
  },
  HeaderText: {
    color: "#e4e6e1",
    fontSize: 10,
    fontWeight: "700",
  },
});

export default HeaderComponent;
