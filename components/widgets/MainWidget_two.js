import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Cards from "./utils/Cards";

const MainWidget_two = () => {
  const kurthis =
    "https://i.pinimg.com/474x/48/1c/ea/481cea6b950d835371b654d6cce696e9.jpg";

  const hoddies =
    "https://images-na.ssl-images-amazon.com/images/I/61Cgpy%2BFMGL._UY550_.jpg";
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#32ed82", "#439dd9"]}
        start={[0.9, 0.2]}
        end={[0, 0.8]}
        style={{ flex: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 400,
          borderRadius: 20,
        }}
      />
      <View style={styles.mainContainer}>
        <View style={styles.textStyles}>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
            💬 Your Shared Products 🤜🤛
          </Text>
        </View>

        <View style={styles.cardcontainer}>
          <ScrollView horizontal={true}>
            <Cards
              image={kurthis}
              iconMoneyBag={false}
              sharedProducts={true}
              text={true}
            />
            <Cards
              image={hoddies}
              iconMoneyBag={false}
              sharedProducts={true}
              text={true}
            />
            <Cards
              image={kurthis}
              iconMoneyBag={false}
              sharedProducts={true}
              text={true}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default MainWidget_two;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  cardcontainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  textStyles: {
    padding: 10,
    marginLeft: -70,
  },
});
