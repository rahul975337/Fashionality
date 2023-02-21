import { View, Text, StyleSheet } from "react-native";
const CaptionContainer = ({ post }) => {
  return (
    <View style={styles.captionContainer}>
      <Text
        style={{
          color: "white",
          marginRight: 5,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        {post.username}
      </Text>
      <Text style={{ color: "white", fontSize: 12 }}>{post.caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 2,
  },
});
export default CaptionContainer;
