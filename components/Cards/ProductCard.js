import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { BORDER_RADIUS,  } from "../../styles/variables";
import { LIGHT_GRAY, COLOR_WHITE, COLOR_TEXT, COLOR_DARK } from "../../styles/colors";
import { vh, vw } from "react-native-css-vh-vw";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_DETAIL_SCREEN } from "../../navigation/ScreenNames";
import AddToCartButton from "../Buttons/AddToCartButton";
import { AntDesign } from "@expo/vector-icons";

import { addToCart } from "../../store/actions/cartActions";

export default function ProductCard({data}) {
  const product = data;
  const navigation = useNavigation();
  
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCT_DETAIL_SCREEN, { data: product })}
      >
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        <Text style={styles.name} ellipsizeMode='tail' numberOfLines={2}>{product.title}</Text>
        <Text style={styles.pricing}>{ product.stock_record_price_currency} {product.stock_record_price_retail}</Text>
        <AddToCartButton
          onPress={()=> addToCart(product)}
          icon={<AntDesign name="shoppingcart" size={16} color={COLOR_WHITE} />}
        />
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
    color: COLOR_TEXT,
  },
  pricing: {
    fontWeight: "bold",
    color: COLOR_DARK,
  },
});