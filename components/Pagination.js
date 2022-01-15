import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { vw } from "react-native-css-vh-vw";
import { COLOR_FADE, COLOR_DARK, COLOR_GREEN, COLOR_WHITE } from "../styles/colors"
import { BORDER_RADIUS_MAX } from "../styles/variables";

export default function Pagination() {
  return (
    <View style={styles.pagination}>
      <Text style={styles.prev}>Prev</Text>
      <View style={{flexDirection: "row"}}>
        <View style={styles.active}><Text style={{color: COLOR_WHITE}}>1</Text></View>
        <Text style={styles.inactive}>2</Text>
        <Text style={styles.inactive}>3</Text>
      </View>
      <Text style={styles.next}>Next</Text>
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
  prev: {
    color: COLOR_FADE,
    padding: 5,
    margin: 5
  },
  next: {
    color: COLOR_DARK,
    padding: 5,
    margin: 5
  },
  active: {
    backgroundColor: COLOR_GREEN,
    color: COLOR_WHITE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: BORDER_RADIUS_MAX
  },
  inactive: {
    padding: 5,
    margin: 5
  }
});