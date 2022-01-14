import React from 'react';
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { PRODUCT_DETAIL_SCREEN, CART_SCREEN } from '../navigation/ScreenNames';

export default function ProductListScreen({ navigation }) {
  return (
    <MainLayout>
        <View>
            <Text>Product list</Text>
            <Text onPress={() => navigation.navigate(PRODUCT_DETAIL_SCREEN)}>Details</Text>
            <Text onPress={() => navigation.navigate(CART_SCREEN)}>Cart</Text>
        </View>
    </MainLayout>
  );
}
