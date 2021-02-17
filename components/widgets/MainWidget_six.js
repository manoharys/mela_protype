import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GroupMemembers from "./utils/GroupMemembers";

const MainWidget_six = () => {
  const initialState = [
    {
      id: 1,
      clubName: "Shalimar Club",
      members: 14,
    },
    {
      id: 2,
      clubName: "Youth Club",
      members: 14,
    },
    {
      id: 3,
      clubName: "Mens Club",
      members: 14,
    },
  ];

  const [groups, setGroups] = useState(initialState);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/bodyImg/exploreBanner.png")} />
      <View style={styles.viewBtnContainer}>
        {groups.map((group) => (
          <GroupMemembers
            members={group.members}
            key={group.id}
            clubName={group.clubName}
          />
        ))}
        <Text style={styles.viewBtn}>View All {"  >"}</Text>
      </View>
    </View>
  );
};

export default MainWidget_six;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    height: 400,
  },
  viewBtnContainer: {
    width: 335,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 10,
    borderRadius: 10,
  },
  viewBtn: {
    color: "#6228d9",
    backgroundColor: "#fff",
    fontStyle: "italic",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
