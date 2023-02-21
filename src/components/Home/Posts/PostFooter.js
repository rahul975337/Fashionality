import { StyleSheet, View } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const PostFooter = ({ post }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.postActions}>
        <AntDesignIcon style={styles.icon} name="hearto" />
        <FontAwesome style={styles.icon} name="comment-o" />
        <FeatherIcon style={styles.icon} name="send" />
      </View>
      <View style={styles.saveIcon}>
        <FontAwesome style={styles.icon} name="bookmark-o" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  icon: {
    color: "white",
    fontSize: 20,
    margin: 5,
  },
  postActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default PostFooter;
