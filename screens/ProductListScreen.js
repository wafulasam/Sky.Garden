import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ImageBackground, FlatList , ActivityIndicator} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { vh } from "react-native-css-vh-vw";
import BreadCrumbs from '../components/BreadCrumbs';
import ProductCard from '../components/Cards/ProductCard';
import Pagination from '../components/Pagination';
import { COLOR_GREEN } from "../styles/colors";
import { vh } from "react-native-css-vh-vw";

import  axios from 'axios'
import { useAppStore } from "../store/store";
import { fetchProducts } from "../store/actions/productsActions";

export default function ProductListScreen({ navigation }) {
  const [ listings, setListings ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const { products } = useAppStore();

  useEffect(() => {
    function fetchListings (){
        setLoading(true)
        const headers = { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'api-key': '4F2408C83BBB69BB31AE97737ED6EE2F'
        }
        const payload = {
          "search": "offer_benefit_type eq 'Absolute' and category_slug eq 'smartphones' ",
          "select": "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type,offer_benefit_value, category_name,category_slug"
        }
        const baserul = "https://skygarden.search.windows.net/indexes/dev-productsv3/docs/search?api-version=2017-11-11";

        axios.post(`${baserul}`, payload, {headers: headers})
            .then((response) => {
              setListings(response.data.value);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            })
    }
    fetchListings();
    fetchProducts(listings);
},[])


  return (
    <MainLayout>
        {loading ? <ActivityIndicator size="large" color={COLOR_GREEN} style={{ marginVertical: vh(40) }} /> : 
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
              keyExtractor={(item) => item.productId}
            />
          </ImageBackground>
        }
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