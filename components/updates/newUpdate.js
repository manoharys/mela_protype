import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Update from "./util/Update";

const newUpdate = () => {
  const updateBanner = "NEW APP UPDATE!!";
  const updateSubText = "Join your friends, buy anything and save big.";
  const updateText = "Update Mela App on PlayStore to Save Big 🔥";
  return (
    <Update
      updateBanner={updateBanner}
      updateSubText={updateSubText}
      updateText={updateText}
    />
  );
};

export default newUpdate;
