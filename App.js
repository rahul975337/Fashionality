import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
