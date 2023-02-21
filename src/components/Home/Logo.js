import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
let customFonts = {
  "Lobster-Regular": require("./../../../assets/Fonts/Lobster-Regular.ttf"),
};
const Logo = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  async function _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    _loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    console.log("fonts not loaded");
    return null;
  }
  if (fontsLoaded) {
    console.log("font");
  }
  return (
    <View>
      <Text
        style={{ fontFamily: "Lobster-Regular", fontSize: 30, color: "white" }}
      >
        Instagram
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // logo: { fontFamily: "Lobster", fontSize: 32 },
});
export default Logo;
