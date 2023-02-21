import { View, Text, Image, StyleSheet } from "react-native";
const LikesContainer = ({ post, postsData }) => {
  return (
    <View style={styles.likesContainer}>
      <Image
        style={{ height: 20, width: 20, borderRadius: 10 }}
        source={{ uri: postsData[0].image }}
      />
      <Text style={{ color: "white", fontSize: 12 }}>
        {`Liked by ${postsData[0].username} and  ${
          postsData.length - 1
        } others`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  likesContainer: {
    flexDirection: "row",
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: "center",
  },
});
export default LikesContainer;
