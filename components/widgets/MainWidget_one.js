import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Cards from "./utils/Cards";
import Day from "./utils/Day";

const MainWidget_one = () => {
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
  ];
  const [products, setProducts] = useState(initialState);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ff4c86", "#ff902b"]}
        start={[0, 0]}
        end={[0.8, 0]}
        style={{ flex: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 820,
          borderRadius: 20,
        }}
      />
      <View style={styles.hotDeals}>
        <Image source={require("../../assets/bodyImg/hot_deals.png")} />
        <View style={{ padding: 10 }}>
          <Day day={2} hour={16} minute={49} second={50} />
        </View>
        <Text style={{ color: "#e4e6e1" }}>
          Buy these products in groups and save big 💸{" "}
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.key.toString()}
          data={products}
          renderItem={({ item }) => (
            <Cards
              image={item.image}
              iconMoneyBag={item.iconMoneyBag}
              discountPrice={item.discountPrice}
              actualPrice={item.actualPrice}
              saved={item.saved}
              sharedProducts={false}
            />
          )}
        />
      </View>

      <View style={styles.sidebarMain}>
        <Image
          source={require("../../assets/bodyImg/ticker_arrow.png")}
          style={{ height: 50 }}
        />
        <View style={{ zIndex: -2 }}>
          <Image
            source={require("../../assets/bodyImg/coins_sideBar.png")}
            style={styles.coinsSideBar}
          />
        </View>
        <View style={styles.sidebarContainer}>
          <View style={styles.sidebarInnerContainer}>
            <Image
              source={require("../../assets/headerImg/product_img3.png")}
            />
            <View>
              <Text style={styles.sidebarName}>Manu</Text>
              <Text style={styles.sidebarName}>Bought</Text>
            </View>
          </View>
          <View style={styles.siderBarItemNames}>
            <Text style={styles.siderBarItemName}>Ethinic Blue Tap</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.viewAllBtn}>
        <Text style={styles.btnTxt}>VIEW ALL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainWidget_one;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 30,
    position: "relative",
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    zIndex: 1,
    position: "relative",
    top: -55,
  },
  hotDeals: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -102,
  },

  viewAllBtn: {
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -28,
  },
  btnTxt: {
    fontWeight: "bold",
    color: "#e4e6e1",
  },
  sidebarMain: {
    flexDirection: "row",
    position: "absolute",
    bottom: 65,
    right: 0,
    zIndex: 1,
  },
  sidebarContainer: {
    width: 100,
    backgroundColor: "#6228d9",
    padding: 3,
    height: 50,
  },
  sidebarInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 1,
    alignItems: "center",
  },
  sidebarName: {
    color: "grey",
    fontSize: 12,
  },
  siderBarItemNames: {
    alignItems: "center",
  },
  siderBarItemName: {
    color: "#e4e6e1",
    fontSize: 12,
  },
  coinsSideBar: {
    position: "absolute",
    top: -20,
    zIndex: -2,
  },
});
