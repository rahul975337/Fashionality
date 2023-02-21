import { View, Text, Image, StyleSheet } from "react-native";
const PostHeader = ({ post }) => {
  return (
    <View style={styles.header}>
      <Image
        style={{
          height: 30,
          width: 30,
          borderRadius: 15,
          margin: 10,
        }}
        source={{ uri: post.image }}
      />
      <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
        {post.username}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default PostHeader;
