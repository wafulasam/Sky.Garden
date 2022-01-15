import React from "react";
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/BreadCrumbs';

export default function CartScreen() {
  return (
    <MainLayout>
      <BreadCrumbs
        details="Home "
        activeDetail="Cart"
      />
      <View>
          <Text>cart</Text>
      </View>
    </MainLayout>
  );
}
