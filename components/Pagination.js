import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { vw } from "react-native-css-vh-vw";

export default function Pagination() {
  return (
    <View style={styles.pagination}>
      <Text>Prev</Text>
      <Text>1 2 3</Text>
      <Text>Next</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    paddingHorizontal: vw(30),
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});