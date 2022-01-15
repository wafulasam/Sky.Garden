import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { COLOR_BLACK, COLOR_DARK, COLOR_TEXT, COLOR_WHITE} from "../styles/colors";

export default function BreadCrumbs(props) {
    const { details, activeDetail } = props;
    return (
        <View>
            <View style={styles.breadcrumb}>
                <Text style={{color: COLOR_TEXT, fontSize: 12 }}>{details}/ </Text>
                <Text style={{color: COLOR_BLACK, fontWeight:'bold', fontSize: 12 }}>{activeDetail}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    breadcrumb: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: Dimensions.get("window").width,
        backgroundColor: COLOR_WHITE,
        flexDirection: "row",
    },
});