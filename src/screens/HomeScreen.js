import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <Post />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
