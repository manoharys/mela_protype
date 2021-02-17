import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Wear from "./utils/Wear";
import WidgetTemplate from "./utils/WidgetTemplate";
import WaveTextUpdate from "./utils/WaveTextUpdate";

const MainWidget_four = () => {
  const initialState = [
    {
      id: 1,
      dressName: "Dress",
      image: require("../../assets/bodyImg/womenDress2.jpg"),
    },
    {
      id: 2,
      dressName: "kurthis",
      image: require("../../assets/bodyImg/kurthis.jpg"),
    },
    {
      id: 3,
      dressName: "kurthis",
      image: require("../../assets/bodyImg/womenDress1.jpg"),
    },
    {
      id: 4,
      dressName: "kurthis",
      image: require("../../assets/bodyImg/kurthis.jpg"),
    },
    {
      id: 5,
      dressName: "Dress",
      image: require("../../assets/bodyImg/womenDress3.jpg"),
    },
    {
      id: 6,
      dressName: "kurthis",
      image: require("../../assets/bodyImg/kurthis.jpg"),
    },
  ];

  const newInialProduct = [
    {
      id: 1,
      dressName: "kurthis",
      image: require("../../assets/bodyImg/womenDress1.jpg"),
    },
    {
      id: 2,
      dressName: "Dress",
      image: require("../../assets/bodyImg/kurthis.jpg"),
    },
    {
      id: 3,
      dressName: "kurthis",
      image: require("../../assets/bodyImg/womenDress2.jpg"),
    },
  ];
  const [products, setProducts] = useState(initialState);
  const [newProducts, setNewProducts] = useState(newInialProduct);
  return (
    <View style={styles.container}>
      <WidgetTemplate
        colorOne="#ff4c86"
        colorTwo="#ff902b"
        text="Womens Wear 👚👗"
        border={15}
        ContainerHeight={750}
        children={products.map((item) => (
          <Wear key={item.id} dressName={item.dressName} image={item.image} />
        ))}
      />
      <WaveTextUpdate />
      <View style={styles.newProduct}>
        {newProducts.map((item) => (
          <Wear key={item.id} dressName={item.dressName} image={item.image} />
        ))}
      </View>
    </View>
  );
};

export default MainWidget_four;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  newProduct: {
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
