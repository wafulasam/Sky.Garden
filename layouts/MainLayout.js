import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Platform
} from "react-native";
import { COLOR_DARK } from "../styles/colors";

export default function MainLayout(props) {
  return (
    <View>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          backgroundColor: COLOR_DARK,
          flex: 0,
        }}
      >
      <StatusBar
        translucent={true}
        backgroundColor={null ? { COLOR_FAUX_DARK } : props.bg}
        barStyle={"light-content"}
      />
      </SafeAreaView>

      {props.children}

    </View>
  );
}