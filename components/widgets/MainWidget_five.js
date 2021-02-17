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
  ];

  const [products, setProducts] = useState(initialState);
  return (
    <View style={styles.container}>
      <WidgetTemplate
        colorOne="#d93f98"
        colorTwo="#6228d9"
        text="Mens Wear 👕👖"
        border={3}
        ContainerHeight={330}
        children={products.map((item) => (
          <Wear key={item.id} dressName={item.dressName} image={item.image} />
        ))}
      />
      <WaveTextUpdate />
    </View>
  );
};

export default MainWidget_four;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  newProduct: {
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
