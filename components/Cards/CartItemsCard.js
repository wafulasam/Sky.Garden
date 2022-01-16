import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { BORDER_RADIUS,  } from "../../styles/variables";
import { LIGHT_GRAY, COLOR_WHITE, COLOR_TEXT, COLOR_DARK, COLOR_GREEN } from "../../styles/colors";
import { vw } from "react-native-css-vh-vw";

import { removeFromCart } from "../../store/actions/cartActions";

export default function CartItemsCard({data}) {
  const product = data;
  
  return (
    <View style={styles.card}>
      <View style={styles.sectionOne}>
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
      </View>
      <View style={styles.sectionTwo}>
        <Text style={styles.name}>{product.title}</Text>
      </View>
      <View style={styles.sectionThree}>
        <TouchableOpacity onPress={() => removeFromCart(product)}>
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>
        <Text style={styles.pricing}>{ product.stock_record_price_currency} {product.stock_record_price_retail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: vw(95),
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR_WHITE,
    flexDirection: "row",
    // flexWrap: "wrap"
  },

  sectionOne: {
    // padding: 10,
  },
  sectionTwo: {
    padding: 10,
  },
  sectionThree: {
    padding: 10,
  },
  productImage: {
    height: 50,
    width: 30,
    margin: 10,
  },
  name: {
    color: COLOR_TEXT,
  },
  pricing: {
    fontWeight: "bold",
    color: COLOR_DARK,
  },
  remove: {
    fontWeight: "bold",
    color: COLOR_GREEN,
    marginBottom: 20,
  },
});