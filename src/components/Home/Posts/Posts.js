import { StyleSheet, View } from "react-native";
import { postsData } from "../../../data/postsData";

import Post from "./Post";

const Posts = ({ currUser }) => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      {postsData.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            postsData={postsData}
            currUser={currUser}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({});
export default Posts;
