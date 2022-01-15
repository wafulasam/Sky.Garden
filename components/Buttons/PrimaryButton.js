import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { COLOR_GREEN, COLOR_WHITE } from "../../styles/colors";
import { BORDER_RADIUS } from "../../styles/variables";

export default function PrimaryButton(props) {
  const { onPress, title = "Save", icon, bg = COLOR_GREEN } = props;
  return (
    <Pressable
      style={[styles.button, { backgroundColor: bg }]}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: "10%",
    margin: 10,
    borderRadius: BORDER_RADIUS,
    flexDirection: "row",
  },

  text: {
    fontWeight: "bold",
    color: COLOR_WHITE,
    marginHorizontal: 10,
  },
});