import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { vh } from "react-native-css-vh-vw";
import BreadCrumbs from '../components/BreadCrumbs';
import CartItemsCard from "../components/Cards/CartItemsCard";
import PrimaryButton from "../components/Buttons/PrimaryButton";

import { useAppStore } from "../store/store";
import { getTotalCartPrice } from "../utils";


function CartFooter (data) {
 const cart = data.data
  return (
    <View>
      <Text>{JSON.stringify(cart)}</Text>
      <View style={styles.cartTotal}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.totalPrice}>Ksh {getTotalCartPrice(cart)}</Text>
      </View>
      <View style={styles.checkoutButton}>
        <PrimaryButton
          title="Proceed to Checkout"
        />
      </View>
    </View>
  )
}

export default function CartScreen() {
  const { cart } = useAppStore();

  return (
    <MainLayout>
      <BreadCrumbs
        details="Home "
        activeDetail="Cart"
      />
      <View style={styles.wrapper}>
        {cart.length < 1 ? <Text style={styles.empty}>Your cart is empty!</Text> :
          <FlatList
            ListHeaderComponent={()=> <Text style={styles.heading}>My cart</Text>}
            ListFooterComponent={()=> <CartFooter data={cart}/>}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={cart}
            renderItem={({ item }) => <CartItemsCard data={item} />}
            keyExtractor={(item, index) => item.id}
          />
        }
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: vh(80),
    width: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  cartTotal: {
    flexDirection: "row",
    padding: 10
  },
  total: {
    fontWeight: "bold",
    margin: 10,
  },
  totalPrice: {
    fontWeight: "bold",
    marginLeft: "60%",
    margin: 10,
  },
  checkoutButton: {
   paddingVertical: 10,
   paddingHorizontal: "10%"
  },
  empty: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  }
});