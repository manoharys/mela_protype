import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Wear from "./utils/Wear";
import WidgetTemplate from "./utils/WidgetTemplate";

const MainWidget_eight = () => {
  const initialState = [
    {
      id: 1,
      dressName: "Western Skirt",
      image: require("../../assets/bodyImg/womenDress2.jpg"),
    },
    {
      id: 2,
      dressName: "Cotton Flex",
      image: require("../../assets/bodyImg/kurthis.jpg"),
    },
    {
      id: 3,
      dressName: "With Jacket",
      image: require("../../assets/bodyImg/womenDress1.jpg"),
    },
    {
      id: 4,
      dressName: "With Jacket",
      image: require("../../assets/bodyImg/womenDress1.jpg"),
    },
    {
      id: 5,
      dressName: "With Jacket",
      image: require("../../assets/bodyImg/womenDress1.jpg"),
    },
  ];

  const [products, setProducts] = useState(initialState);
  return (
    <View style={styles.container}>
      <WidgetTemplate
        colorOne="#d93f98"
        colorTwo="#6228d9"
        text="Skirts Store 👗"
        border={3}
        ContainerHeight={250}
        children={
          <ScrollView horizontal={true}>
            {products.map((item) => (
              <Wear
                key={item.id}
                dressName={item.dressName}
                image={item.image}
              />
            ))}
          </ScrollView>
        }
      />
    </View>
  );
};

export default MainWidget_eight;

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
