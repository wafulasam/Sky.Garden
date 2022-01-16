import React, { useEffect } from 'react';
import { Text, StyleSheet, ImageBackground, FlatList, Dimensions } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { vh } from "react-native-css-vh-vw";
import BreadCrumbs from '../components/BreadCrumbs';
import ProductCard from '../components/Cards/ProductCard';
import Pagination from '../components/Pagination';

import { useAppStore } from "../store/store";
import { fetchProducts } from "../store/actions/productsActions";

export default function ProductListScreen({ navigation }) {
  const { products } = useAppStore();

  useEffect(()=> {
    const { listings } = require("../data.json");
    fetchProducts(listings);
  },[])

  return (
    <MainLayout>
        <ImageBackground
          source={require("../assets/images/bg-1.png")}
          style={styles.backgroundImage}
        >
          <BreadCrumbs
            details="Home / Mobile phones & Tablets"
            activeDetail="Smartphones"
          />
            <FlatList
              ListHeaderComponent={()=> <Text style={styles.heading}>Smartphones</Text>}
              ListFooterComponent={()=> <Pagination/>}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={products}
              renderItem={({ item }) => <ProductCard data={item} />}
              keyExtractor={(item) => item.title}
            />
        </ImageBackground>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: vh(80),
    width: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  }
});