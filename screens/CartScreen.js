import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { vh } from "react-native-css-vh-vw";
import BreadCrumbs from '../components/BreadCrumbs';
import CartItemsCard from "../components/Cards/CartItemsCard";

import { useAppStore } from "../store/store";

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
            // ListFooterComponent={()=> null}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={cart}
            renderItem={({ item }) => <CartItemsCard data={item} />}
            keyExtractor={(item) => item.id}
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
  empty: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  }
});