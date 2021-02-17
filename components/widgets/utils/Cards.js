import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Text } from "react-native-paper";
import Day from "../utils/Day";

const MyComponent = ({
  image,
  iconMoneyBag,
  discountPrice,
  actualPrice,
  saved,
  sharedProducts,
  text,
}) => (
  <TouchableOpacity>
    <Card style={styles.cardContainer}>
      <Card.Cover source={{ uri: image }} />
      {iconMoneyBag && (
        <View style={styles.moneyBagContainer}>
          <Image source={iconMoneyBag} style={{ zIndex: 1 }} />
          <Text style={styles.moneyBagText}>Save Rs 40</Text>
        </View>
      )}
      {actualPrice && (
        <Card.Content>
          <Title style={{ fontWeight: "bold", padding: 3 }}>
            <Text> {discountPrice} </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "#778299",
              }}
            >
              {actualPrice}
            </Text>
          </Title>

          {saved && (
            <Paragraph
              style={{ color: "#7ac70c", fontWeight: "bold", padding: 4 }}
            >
              Save 40%
            </Paragraph>
          )}
        </Card.Content>
      )}
      {sharedProducts && (
        <Card.Content>
          <Title style={styles.days}>
            <View style={styles.day}>
              <Day day={2} hour={16} minute={49} second={50} />
            </View>
          </Title>
          {text && (
            <Paragraph style={{ color: "#0009", fontWeight: "bold" }}>
              to add a friend to buy 🛍 & save together 🔥
            </Paragraph>
          )}
          <Paragraph
            style={{
              color: "#ffa300",
              fontWeight: "bold",
              fontStyle: "italic",
              fontWeight: "bold",
              padding: 4,
              fontSize: 17,
            }}
          >
            INVITE NOW {"   >"}
          </Paragraph>
        </Card.Content>
      )}
    </Card>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 13,
    width: 173,
    marginLeft: 13,
    marginBottom: 20,
    position: "relative",
  },
  moneyBagContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 115,
  },
  moneyBagText: {
    backgroundColor: "#32ed82",
    padding: 4,
    paddingLeft: 12,
    color: "#ffff",
    fontWeight: "bold",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 2,
    fontStyle: "italic",
    width: 90,
    height: 24,
    marginLeft: -5,
    marginTop: 7,
    position: "relative",
  },
  days: {
    position: "relative",
    marginTop: 10,
    marginLeft: -10,
  },
});

export default MyComponent;
