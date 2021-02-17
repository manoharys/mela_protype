import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import HeaderComponent from "./util/HeaderComponent";
import HeaderItems from "./util/HeaderItems";
import { LinearGradient } from "expo-linear-gradient";

const melaText = require("../../assets/headerImg/mela_text.png");
const icon_location = require("../../assets/headerImg/icon_location.png");
const pin = "110022";
const icon_arrow_down = require("../../assets/headerImg/icon_arrow_down.png");

const group_icon = require("../../assets/headerImg/group_icon.jpg");
const icon_cart = require("../../assets/headerImg/icon_cart.png");
const product_img1 = require("../../assets/headerImg/product_img1.png");
const product_img2 = require("../../assets/headerImg/product_img2.png");
const product_img3 = require("../../assets/headerImg/product_img3.png");

const AppHeader = () => {
  const initialState = [
    {
      id: Math.random() * Math.random(),
      icon: product_img1,
      text: "Kurtis",
    },
    {
      id: Math.random() * Math.random(),
      icon: product_img2,
      text: "Kurtis",
    },
    {
      id: Math.random() * Math.random(),
      icon: product_img3,
      text: "Kurtis",
    },
    {
      id: Math.random() * Math.random(),
      icon: product_img1,
      text: "Kurtis",
    },
    {
      id: Math.random() * Math.random(),
      icon: product_img2,
      text: "Kurtis",
    },
  ];

  const [items, setItems] = useState(initialState);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6228d9", "#d93f98"]}
        start={[0, 0]}
        end={[0.8, 0]}
        style={{ flex: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 200,
        }}
      />
      <View style={styles.headerOne}>
        <Image source={melaText} />
        <TouchableOpacity style={styles.addrressTouchble}>
          <View style={styles.addrress}>
            <Image source={icon_location} />
            <View>
              <Text style={styles.deliveryText}>Delivery to</Text>
              <Text style={styles.pin}>{pin}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <HeaderComponent icon={group_icon} text={"Your Groups"} /> */}
        <HeaderComponent icon={icon_cart} text={"Your Cart"} span={true} />
        <HeaderComponent icon={icon_arrow_down} text={"More"} />
      </View>

      <View style={styles.headerItems}>
        <ScrollView horizontal={true}>
          {items.map((item) => (
            <HeaderItems key={item.id} icon={item.icon} text={item.text} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 30,
  },
  headerOne: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addrressTouchble: {
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 8,
    borderRadius: 40,
    flex: 0.47,
  },
  addrress: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  deliveryText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "100",
  },
  pin: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
  headerItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default AppHeader;
