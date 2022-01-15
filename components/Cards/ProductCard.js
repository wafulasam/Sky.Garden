import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { BORDER_RADIUS,  } from "../../styles/variables";
import { LIGHT_GRAY, COLOR_WHITE } from "../../styles/colors";
import { vh, vw } from "react-native-css-vh-vw";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_DETAIL_SCREEN } from "../../navigation/ScreenNames"

export default function ProductCard({data}) {
  const product = data;
  const navigation = useNavigation();
  
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCT_DETAIL_SCREEN, { data: product })}
      >
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.pricing}>{ product.stock_record_price_currency} {product.stock_record_price_retail}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
    margin: 10,
  },
  name: {
    fontWeight: "bold",
  },
});