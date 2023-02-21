import { View, Text, StyleSheet, Image } from "react-native";
import CaptionContainer from "./CaptionContainer";
import CommentsContainer from "./CommentsContainer";
import LikesContainer from "./LikesContainer";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
const Post = ({ post, postsData, currUser }) => {
  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} />
      <Image
        style={{ width: "100%", height: "70%" }}
        source={{ uri: post.image }}
      />
      <PostFooter post={post} />
      <LikesContainer post={post} postsData={postsData} />
      <CaptionContainer post={post} />
      <CommentsContainer post={post} />
      <Text style={styles.timeAgo}>6 hours ago</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    height: 500,
    padding: 1,
    width: "100%",
    marginBottom: 20,
  },
  timeAgo: {
    color: "grey",
    marginHorizontal: 5,
    marginVertical: 2,
    fontSize: 10,
  },
});
export default Post;
