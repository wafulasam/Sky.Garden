import React from "react";
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/BreadCrumbs';

export default function ProductDetailScreen({ route }) {
  const product = route.params.data;

  return (
    <MainLayout>
      <BreadCrumbs
        details="Home / Clothes & Footwear / For Women "
        activeDetail="Women's Clothing"
      />
      <View>
          <Text>Product details</Text>
          <Text>{JSON.stringify(product)}</Text>
      </View>
    </MainLayout>
  );
}
