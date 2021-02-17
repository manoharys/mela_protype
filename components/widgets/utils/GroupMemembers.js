import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GroupMemembers = ({ clubName, members }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.groupName}>{clubName}</Text>
        <Text style={styles.groupMember}>{members} members</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>JOIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupMemembers;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: 335,
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.2,
    marginBottom: 15,
  },
  groupName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#040e35",
  },
  groupMember: {
    fontWeight: "bold",
    color: "#778299",
  },
  btn: {
    borderRadius: 14,
    backgroundColor: "#6228d9",
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1,
  },
});
