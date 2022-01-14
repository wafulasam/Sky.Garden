// main navigation
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { PRODUCT_LIST_SCREEN, PRODUCT_DETAIL_SCREEN, CART_SCREEN } from "./ScreenNames";

//import screens
import ProductListScreen from  "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";


export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PRODUCT_LIST_SCREEN}
        component={ProductListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={CART_SCREEN}
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name={DESIGNER_LISTING_DETAIL}
        component={DesignerListingDetail}
        options={{
          title: DESIGNER_LISTING,
          headerTintColor: "white",
          headerBackTitleVisible: null,
          headerBackVisible: null,
          headerStyle: {
            backgroundColor: PRIMARY_GREEN,
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}