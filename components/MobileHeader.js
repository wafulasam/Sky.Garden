import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
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
                <View style={styles.imageWrapper}>
                    <Image source={require("../assets/images/menu.png")} style={styles.hamburgerMenu} />
                    <Image source={require("../assets/images/skygarden.png")} style={styles.logo} />
                </View>
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
        justifyContent: "space-between"
    },
    text: {
        color: COLOR_WHITE,
        marginHorizontal: 5,
    },
    textWrapper: {
        flexDirection: "row",
    },
    imageWrapper: {
        flexDirection: "row",
    },
    hamburgerMenu: {
        height: 20,
        width: 20,
        marginTop: 15,
        marginHorizontal: 5,
    },
    logo: {
        height: 30,
        width: 90,
        marginVertical: 10,
        marginHorizontal: 10,
    }
});