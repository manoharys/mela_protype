import React from "react";
import Update from "./util/Update";
import { View, Text } from "react-native";

const GroupUpdate = () => {
  const updateBanner = "JOIN NOW!!";
  const updateSubText = "Join your friends, buy anything and save big.";
  const updateText = "Group Buy with friends";
  return (
    <View style={{ marginTop: -50 }}>
      <Update
        updateBanner={updateBanner}
        updateSubText={updateSubText}
        updateText={updateText}
      />
      <View
        style={{ borderWidth: 0.2, borderColor: "grey", marginTop: 30 }}
      ></View>
    </View>
  );
};

export default GroupUpdate;
