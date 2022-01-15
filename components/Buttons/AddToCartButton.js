import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLOR_SEPERATOR, COLOR_DARK, COLOR_WHITE, } from "../../styles/colors";
import { BORDER_RADIUS } from "../../styles/variables";

export default function PrimaryButton(props) {
  const { onPress, title = "Add to Cart", icon, bg = COLOR_DARK } = props;
  return (
    <Pressable
      style={[styles.button, { backgroundColor: bg }]}
      onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
        <View style={styles.verticleLine}></View>
        {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: "10%",
    marginVertical: 10,
    borderRadius: BORDER_RADIUS,
    flexDirection: "row",
  },
  text: {
    color: COLOR_WHITE,
    marginHorizontal: 10,
  },
  verticleLine:{
    height: '100%',
    width: 1,
    backgroundColor: COLOR_SEPERATOR,
    marginRight: 10,
  },
});