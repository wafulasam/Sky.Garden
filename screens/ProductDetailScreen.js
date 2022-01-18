import React from "react";
import { StyleSheet, Text, View , Image, ScrollView } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/BreadCrumbs';
import PrimaryButton from "../components/Buttons/PrimaryButton"
import { COLOR_DARK, COLOR_GREEN, COLOR_LIME, COLOR_TEXT, COLOR_WHITE } from "../styles/colors";
import { BORDER_RADIUS } from "../styles/variables";
import { vh, vw} from "react-native-css-vh-vw";
import { AntDesign} from "@expo/vector-icons";

import { addToCart } from "../store/actions/cartActions";

export default function ProductDetailScreen({ route }) {
  const product = route.params.data;

  return (
    <MainLayout>
      <BreadCrumbs
        details="Home / Clothes & Footwear / For Women "
        activeDetail="Women's Clothing"
      />
      <ScrollView style={styles.scroll}>
        <View style={{ paddingHorizontal: 20 }}>
          <Image source={{uri: product.thumbnail}} style={styles.productImage} />
          <View style={styles.partner}>
            <Text style={styles.partnerName}>{product.partner_name}</Text>
            <Image source={require("../assets/images/verified.png")} style={styles.verified}/>
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.stock_record_price_currency} {product.stock_record_price_retail}</Text>
          <PrimaryButton
            onPress={() => addToCart(product)}
            title="ADD TO CART"
          />
          <View style={styles.deliveryBanner}>
            <Image source={require("../assets/images/delivery-car.png")} style={styles.deliveryCar} />
            <Text style={styles.deliveryBannerText} >
              Delivery within Nairobi CBD from as low as 
              <Text style={{fontWeight: "bold"}}> Ksh 100 </Text>
              <Text style={{ color: COLOR_GREEN, textDecorationLine: 'underline',}}>Calculate Shipping</Text>
              </Text>
          </View>
        </View>
        <Image source={require("../assets/images/bg-2.png")} style={styles.curverdBackground} />
        <View style={{backgroundColor: COLOR_LIME, paddingHorizontal: 20, paddingBottom: 50}}>
            <View style={{ flexDirection: "row",}}>
              <View style={styles.descriptionButton}>
                <Text style={styles.descriptionText}>Description</Text>
              </View>
              <AntDesign name="up" size={25} color={COLOR_TEXT} style={{ marginLeft: vw(40), textAlignVertical: 'center'}} />
            </View>
            <View style={{flex: 1, height: 3, backgroundColor: COLOR_TEXT, marginVertical: 5}} />
            <View>
              <Text style={{fontWeight: "bold"}}>About </Text>
              <Text>iPhone X features an all-screen design with a 5.8-inch Super Retina HD display with HDR and True Tone.¹ Designed with the most durable glass ever in a smartphone and a surgical grade.</Text>
              <Text style={{fontWeight: "bold", marginTop: 10}}>Features</Text>
              <Text> - All-screen design </Text>
              <Text> - 5.8-inch Super Retina HD display</Text>
              <Text> - HDR and True Tone.</Text>
              <Text style={{fontWeight: "bold", marginTop: 10}}>Product Condition</Text>
              <Text>New</Text>
              <View style={{ flexDirection: "row"}}>
                <Text style={{fontWeight: "bold", color: COLOR_TEXT, fontSize: 20, marginVertical: 10}}>Product Reviews</Text>
                <AntDesign name="down" size={25} color={COLOR_TEXT} style={{ marginLeft: vw(40), textAlignVertical: 'center'}} />
              </View>
              <View style={{flex: 1, height: 3, backgroundColor: COLOR_TEXT, marginVertical: 5}} />
              <View style={{ flexDirection: "row"}}>
                <Text style={{fontWeight: "bold", color: COLOR_TEXT, fontSize: 20, marginVertical: 10}}>Shipping & Returns</Text>
                <AntDesign name="down" size={25} color={COLOR_TEXT} style={{ marginLeft: vw(33), textAlignVertical: 'center'}} />
              </View>
              <View style={{flex: 1, height: 3, backgroundColor: COLOR_TEXT, marginVertical: 10}} />
              <View style={styles.knowYourSeller}>
                  <View style={{padding: 10}}>
                    <Text style={{fontWeight: "bold", fontSize: 18, marginBottom: 10}}>Know your Seller</Text>
                    <Text style={{textDecorationLine: 'underline', marginBottom: 10}}>Merix Suppliers </Text>
                    <Text style={styles.knowSellerText}>On Sky.Garden since 2019</Text>
                    <Text style={styles.knowSellerText}>Nairobi, Kenya </Text>
                    <Text style={styles.knowSellerText}>Item Availability within 24hrs</Text>
                    <Text style={styles.knowSellerText}><Text style={{fontWeight: "bold"}}>60</Text> Bought here</Text>
                  </View>
                  <View style={{paddingVertical: 30, alignItems: 'center',}}>
                    <Image source={require("../assets/images/seller-icon.png")} style={{marginTop: 30}} />
                    <View style={styles.rating}>
                      <Image source={require("../assets/images/star-yellow.png")} style={styles.yellowStar} />
                      <Image source={require("../assets/images/star-yellow.png")} style={styles.yellowStar} />
                      <Image source={require("../assets/images/star-yellow.png")} style={styles.yellowStar} />
                      <Image source={require("../assets/images/star-yellow.png")} style={styles.yellowStar} />
                      <Image source={require("../assets/images/star-gray.png")} style={styles.grayStar} />
                      <Text><Text style={{fontWeight: "bold"}}>13</Text> Reviews</Text>
                    </View>
                  </View>
              </View>
            </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  scroll: {
    // padding: 10,
    marginBottom: vh(30),
  },
  productImage: {
    height: vh(50),
    marginTop: 10,
    marginBottom: 30,
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
  },
  deliveryBanner: {
    marginBottom: 40,
    padding: 10,
    backgroundColor: COLOR_LIME,
    flexDirection: "row",
  },
  deliveryBannerText: {
    flex: 1
  },
  deliveryCar: {
    height: 40,
    width: 80
  },
  descriptionButton: {
    backgroundColor: COLOR_WHITE,
    padding: 10,
    width: 150,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
  },
  descriptionText: {
    color: COLOR_DARK,
    fontWeight: "bold",
    fontSize: 18
  },
  knowYourSeller: {
    paddingBottom: 20,
    flexDirection: "row",
    backgroundColor: COLOR_WHITE
  },
  knowSellerText: {
    marginVertical: 10,
    fontSize: 10
  },
  rating: {
    flexDirection: "row",
    marginTop: 40
  },
  yellowStar: {
    height: 14,
    width: 14
  },
  grayStar: {
    height: 16,
    width: 16
  },
});