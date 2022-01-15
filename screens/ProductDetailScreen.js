import React from "react";
import { StyleSheet, Text, View , Image, ScrollView } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/BreadCrumbs';
import PrimaryButton from "../components/Buttons/PrimaryButton"
import { COLOR_DARK, COLOR_GREEN } from "../styles/colors";
import { vh } from "react-native-css-vh-vw";

export default function ProductDetailScreen({ route }) {
  const product = route.params.data;

  return (
    <MainLayout>
      <BreadCrumbs
        details="Home / Clothes & Footwear / For Women "
        activeDetail="Women's Clothing"
      />
      <ScrollView style={styles.scroll}>
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        <View style={styles.partner}>
          <Text style={styles.partnerName}>{product.partner_name}</Text>
          <Image source={require("../assets/images/verified.png")} style={styles.verified}/>
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.stock_record_price_currency} {product.stock_record_price_retail}</Text>
        <PrimaryButton
          title="ADD TO CART"
        />
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  scroll: {
    // height: vh(100),
    padding: 10,
    backgroundColor: "red"
  },
  productImage: {
    height: vh(50),
    width: "90%",
    margin: 10,
  },
  partner: {
    flexDirection: "row",
  },
  partnerName: {
    textTransform: "uppercase",
    textDecorationLine: 'underline',
    marginRight: 5,
  },
  verified: {
    height: 20,
    width: 20,
  },
  title: {
    fontSize: 20,
    color: COLOR_DARK,
    fontWeight: "bold",
    marginVertical: 5
  },
  price: {
    fontSize: 20,
    color: COLOR_GREEN,
    fontWeight: "bold",
  }
});