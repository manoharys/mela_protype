import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DayBlock from "./DayBlock";

const Day = ({ day, hour, minute, second }) => {
  return (
    <View style={styles.dayStyles}>
      <DayBlock block={day} />
      <Text style={styles.dayText}>D</Text>
      <DayBlock block={hour} />
      <Text>:</Text>

      <DayBlock block={minute} />
      <Text>:</Text>

      <DayBlock block={second} />
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  dayStyles: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontWeight: "bold",
  },
});
