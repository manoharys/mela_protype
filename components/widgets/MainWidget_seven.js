import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import WidgetTemplate from "./utils/WidgetTemplate";
import Cards from "./utils/Cards";

const MainWidget_seven = () => {
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

      sharedProducts: false,
    },
    {
      key: 3,
      image: hoddies,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",

      sharedProducts: false,
    },
    {
      key: 4,
      image: kurthis,
      iconMoneyBag: require("../../assets/bodyImg/icon_money_bag.png"),
      discountPrice: "₹199",
      actualPrice: "₹249",

      sharedProducts: false,
    },
  ];
  const [products, setProducts] = useState(initialState);

  return (
    <View style={styles.container}>
      <WidgetTemplate
        colorOne="#32ed82"
        colorTwo="#439dd9"
        text="Group Buy 👨‍👨‍👧 Save Big 💸"
        border={5}
        ContainerHeight={400}
        children={
          <View style={styles.cardcontainer}>
            <ScrollView horizontal={true}>
              {products.map((item) => (
                <Cards
                  key={item.key}
                  image={item.image}
                  iconMoneyBag={item.iconMoneyBag}
                  discountPrice={item.discountPrice}
                  actualPrice={item.actualPrice}
                  sharedProducts={true}
                />
              ))}
            </ScrollView>
          </View>
        }
      />
    </View>
  );
};

export default MainWidget_seven;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cardcontainer: {
    flexDirection: "row",
  },
});
