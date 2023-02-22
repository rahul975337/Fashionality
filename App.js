import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React, { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { currUser } from "./src/data/currUser";
export default function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle={"light-content"} />
      {isHome && <HomeScreen currUser={currUser} />}
      {/* <ProfileScreen currUser={currUser} /> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
