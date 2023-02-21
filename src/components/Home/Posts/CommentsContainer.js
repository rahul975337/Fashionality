import { View, Text, StyleSheet } from "react-native";
const CommentsContainer = ({ post }) => {
  return (
    <View style={styles.commentsContainer}>
      <Text
        style={{ color: "grey", fontSize: 12 }}
      >{`View all ${post.comments.length} comments`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  commentsContainer: { marginHorizontal: 5, marginVertical: 2 },
});
export default CommentsContainer;
