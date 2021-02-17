import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Update from "../updates/util/Update";
import Cards from "./utils/Cards";

const MainWidget_three = () => {
  const updateBanner = "JOIN NOW!!";
  const updateSubText = "Join your friends, buy anything and save big.";
  const updateText = "Group Buy with friends";

  const itemOne =
    "https://images-na.ssl-images-amazon.com/images/G/31/img20/Shoes/December/EOSS02/Handbags/Trends02/3._SY530_QL85_.jpg";
  const itemTwo =
    "https://images-na.ssl-images-amazon.com/images/G/31/img20/Shoes/December/EOSS02/Handbags/Trends02/4._SY530_QL85_.jpg";

  initialState = [
    {
      id: 1,
      image: itemTwo,
      iconMoneyBag: false,
      sharedProducts: false,
    },
    {
      id: 2,
      image: itemOne,
      iconMoneyBag: false,
      sharedProducts: false,
    },
    {
      id: 3,
      image: itemTwo,
      iconMoneyBag: false,
      sharedProducts: false,
    },
    {
      id: 4,
      image: itemOne,
      iconMoneyBag: false,
      sharedProducts: false,
    },
  ];

  const [sharedProducts, setSharedProducts] = useState(initialState);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textBold}>Shop 🛍️, Share 💕 & Save 🎁</Text>
      <Text style={styles.textLight}>
        Stories of people from across India who are shopping, sharing and saving
        with friends.
      </Text>

      <View style={styles.cardcontainer}>
        <ScrollView horizontal={true}>
          {sharedProducts.map((items) => (
            <Cards
              key={items.id}
              image={items.image}
              iconMoneyBag={items.iconMoneyBag}
              sharedProducts={items.sharedProducts}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.updateStyles}>
        <Update
          updateBanner={updateBanner}
          updateSubText={updateSubText}
          updateText={updateText}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../assets/bodyImg/cusmetic.jpg")}
          style={{ width: 400, height: 300, borderRadius: 20 }}
        />
      </View>
    </View>
  );
};

export default MainWidget_three;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  cardcontainer: {
    flexDirection: "row",

    alignItems: "center",
  },
  textBold: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 30,
    marginLeft: 10,
  },
  textLight: {
    color: "#b5c0d6",
    width: 400,
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 20,
  },
  updateStyles: {
    marginTop: -55,
  },
});
