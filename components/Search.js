import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLOR_WHITE, COLOR_DARK } from "../styles/colors";
import { BORDER_RADIUS_MAX } from "../styles/variables";

export default function Search(props) {
  return (
    <View style={styles.search}>
      <View style={styles.inputCover}>
        <TextInput
          placeholder="Search for anything"
          // multiline
          value={props.value}
          onChangeText={props.onChangeText}
          placeholderTextColor={COLOR_DARK}
          style={styles.input}
        />
        <AntDesign name="search1" size={24} color={COLOR_DARK} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: COLOR_DARK,
    paddingBottom: 20,
    paddingHorizontal:10
  },
  inputCover: {
    flexDirection: "row",
    borderRadius: BORDER_RADIUS_MAX,
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: COLOR_WHITE,
  },
  input: {
    color: COLOR_WHITE,
    width: "90%",
    borderRadius: 15,
    marginLeft: 10,
    color: COLOR_DARK
  },
});