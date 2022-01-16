import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLOR_WHITE, COLOR_GREEN, COLOR_BLACK } from "../styles/colors";
import { BORDER_RADIUS_MAX } from "../styles/variables";
import { useNavigation } from "@react-navigation/native";
import { CART_SCREEN } from "../navigation/ScreenNames";

import { useAppStore } from "../store/store";
import { getTotalCartQuantity } from "../utils";

export default function CartIcon() {
  const navigation = useNavigation();
  const { cart } = useAppStore();
  const totalItemsInCart = getTotalCartQuantity(cart);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(CART_SCREEN)}
      style={styles.button}
    >
      <AntDesign name="shoppingcart" size={30} color={COLOR_WHITE} />
      {totalItemsInCart > 0 ? 
        <View style={styles.badge}>
          <Text style={styles.text}> {totalItemsInCart}</Text>
        </View> 
      : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  badge: {
    backgroundColor: COLOR_GREEN,
    borderRadius: BORDER_RADIUS_MAX,
    height: 20,
    paddingHorizontal: 4,
    marginTop: -5,
    marginLeft: -5,
  },
  text: {
    color: COLOR_BLACK,
  },
});