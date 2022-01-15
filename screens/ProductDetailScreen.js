import React from "react";
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function ProductDetailScreen({ route }) {
  const product = route.params.data;

  return (
    <MainLayout>
        <View>
            <Text>Product details</Text>
            <Text>{JSON.stringify(product)}</Text>
        </View>
    </MainLayout>
  );
}
