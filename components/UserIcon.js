import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLOR_WHITE } from "../styles/colors";

export default function UserIcon() {
  return (
    <View style={styles.icon}>
        <FontAwesome5 name="user" size={24} color={COLOR_WHITE} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 8,
  },
});