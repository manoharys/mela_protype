import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Cards from "./utils/Cards";

const MainWidget_nine = () => {
  const kurthis =
    "https://i.pinimg.com/474x/48/1c/ea/481cea6b950d835371b654d6cce696e9.jpg";

  const hoddies =
    "https://images-na.ssl-images-amazon.com/images/I/61Cgpy%2BFMGL._UY550_.jpg";

  const icon_money_bag = require("../../assets/bodyImg/icon_money_bag.png");

  const initialState = [
    {
      key: 1,
      image: hoddies,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",
      saved: "40%",
      sharedProducts: false,
    },
    {
      key: 2,
      image: kurthis,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",
      saved: "40%",
      sharedProducts: false,
    },
    {
      key: 3,
      image: hoddies,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",
      saved: "40%",
      sharedProducts: false,
    },
    {
      key: 4,
      image: kurthis,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",
      saved: "40%",
      sharedProducts: false,
    },
    {
      key: 5,
      image: kurthis,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",
      saved: "40%",
      sharedProducts: false,
    },
    {
      key: 6,
      image: hoddies,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",
      saved: "40%",
      sharedProducts: false,
    },
  ];
  const [products, setProducts] = useState(initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Our Top Collections</Text>
      <View style={styles.cardContainer}>
        {products.map((item) => (
          <Cards
            key={item.key}
            image={item.image}
            iconMoneyBag={item.iconMoneyBag}
            discountPrice={item.discountPrice}
            actualPrice={item.actualPrice}
            saved={item.saved}
            sharedProducts={false}
          />
        ))}
      </View>
    </View>
  );
};

export default MainWidget_nine;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    padding: 20,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
