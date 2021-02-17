import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AppHeader from "./components/appHeader/AppHeader";
import NewUpdate from "./components/updates/newUpdate";
import GroupUpdate from "./components/updates/GroupUpdate";
import MainWidget_one from "./components/widgets/MainWidget_one";
import MainWidget_two from "./components/widgets/MainWidget_two";
import MainWidget_three from "./components/widgets/MainWidget_three";
import MainWidget_four from "./components/widgets/MainWidget_four";
import MainWidget_five from "./components/widgets/MainWidget_five";
import MainWidget_six from "./components/widgets/MainWidget_six";
import MainWidget_seven from "./components/widgets/MainWidget_seven";
import MainWidget_eight from "./components/widgets/MainWidget_eight";
import MainWidget_nine from "./components/widgets/MainWidget_nine";

export default function App() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <AppHeader />
      <NewUpdate />
      <MainWidget_one />
      <MainWidget_two />
      <MainWidget_three />
      <MainWidget_four />
      <MainWidget_five />
      <MainWidget_six />
      <MainWidget_seven />
      <GroupUpdate />
      <MainWidget_eight />
      <MainWidget_nine />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#040e35",
  },
});
