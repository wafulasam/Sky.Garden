import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { vh } from "react-native-css-vh-vw";
import BreadCrumbs from '../components/BreadCrumbs';

export default function ProductListScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/bg-1.png")}
          style={styles.image}
        >
          <BreadCrumbs
            details="Home / Mobile phones & Tablets"
            activeDetail="Smartphones"
          />
          <ScrollView veticle={true} showsVerticleScrollIndicator={true} style={styles.scrollView}>
            <View>
              <Text style={styles.heading}>Smartphones</Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: vh(40),
    width: "100%",
  },
  scrollView: {
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold"
  }
});