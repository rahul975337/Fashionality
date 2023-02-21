import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Divider from "../components/Home/Divider";
import Header from "../components/Home/Header";
import Posts from "../components/Home/Posts/Posts";
import Stories from "../components/Home/Stories/Stories";
const HomeScreen = () => {
  const currUser = {
    image: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    username: "tilwani03",
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories currUser={currUser} />
        <Divider />
        <Posts currUser={currUser} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
