import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, FlatList } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { vh } from "react-native-css-vh-vw";
import BreadCrumbs from '../components/BreadCrumbs';
import ProductCard from '../components/Cards/ProductCard';
import Pagination from '../components/Pagination';

import { listings } from "../data"

export default function ProductListScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/bg-1.png")}
          style={styles.backgroundImage}
        >
          <BreadCrumbs
            details="Home / Mobile phones & Tablets"
            activeDetail="Smartphones"
          />
          <View style={styles.wrapper}>
              <FlatList
                ListHeaderComponent={()=> <Text style={styles.heading}>Smartphones</Text>}
                ListFooterComponent={()=> <Pagination/>}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={listings}
                renderItem={({ item }) => <ProductCard data={item} />}
                keyExtractor={(item) => item.title}
            />
          </View>
        </ImageBackground>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: vh(40),
    width: "100%",
  },
  wrapper: {
    minHeight: vh(100),
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  }
});