import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { COLOR_BLACK, COLOR_DARK, COLOR_WHITE} from "../styles/colors";
import { AntDesign} from "@expo/vector-icons";

export default function MobileHeader() {
    return (
        <View>
            <View style={styles.topBar}>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>Customer Care</Text>
                    <AntDesign name="down" size={16} color={COLOR_WHITE} />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>Sell</Text>
                    <Text style={styles.text}>Help & Contact</Text>
                </View>
            </View>
            <View style={styles.header}>
                <Text style={styles.text}>topbar </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        padding: 10,
        width: Dimensions.get("window").width,
        backgroundColor: COLOR_BLACK,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        padding: 10,
        width: Dimensions.get("window").width,
        backgroundColor: COLOR_DARK,
        flexDirection: "row",
    },
    text: {
        color: COLOR_WHITE,
        marginHorizontal: 5,
    },
    textWrapper: {
        flexDirection: "row",
    }
});