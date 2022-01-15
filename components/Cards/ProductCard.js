import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { BORDER_RADIUS, BORDER_RADIUS_MAX } from "../../styles/variables";
import { LIGHT_GRAY, PRIMARY_BLUE, COLOR_WHITE } from "../../styles/colors";
import { vh, vw } from "react-native-css-vh-vw";
// const width = Dimensions.get("screen").width / 2 - 30;

export default function ProductCard({data}) {
  const product = data;
  
  return (
    <View style={styles.card}>
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.pricing}>{ product.stock_record_price_currency} {product.stock_record_price_retail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // width,
    width: vw(45),
    padding: vw(2.5),
    margin: 10,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR_WHITE
  },
  productImage: {
    height: vh(20),
    // width: "100%",
    // borderRadius: BORDER_RADIUS,
    margin: 10,
  },
  name: {
    fontWeight: "bold",
  },
});