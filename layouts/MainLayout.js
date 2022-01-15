import React from "react";
import { SafeAreaView, StatusBar, View, Platform } from "react-native";
import { COLOR_BLACK } from "../styles/colors";
import MobileHeader from "../components/MobileHeader";
import Search from "../components/Search";

export default function MainLayout(props) {
  return (
    <View>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          backgroundColor: COLOR_BLACK,
          flex: 0,
        }}
      >
      <StatusBar
        translucent={true}
        backgroundColor={COLOR_BLACK}
        barStyle={"light-content"}
      />
      </SafeAreaView>

      <MobileHeader/>
      <Search/>
      {props.children}

    </View>
  );
}