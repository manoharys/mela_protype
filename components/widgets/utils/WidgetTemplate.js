import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WidgetTemplate = ({
  colorOne,
  colorTwo,
  text,
  children,
  border,
  ContainerHeight,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colorOne, colorTwo]}
        start={[0, 0]}
        end={[0.8, 0]}
        style={{ flex: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: ContainerHeight,
          borderRadius: border,
        }}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>

        <TouchableOpacity>
          <Text style={styles.btn}>
            VIEW ALL{" "}
            <Image
              source={require("../../../assets/bodyImg/icon_arrow_right.png")}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default WidgetTemplate;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  headerText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  children: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn: {
    color: "#fff",
    fontWeight: "bold",
  },
});
