import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Divider from "../components/Home/Divider";
import AddStory from "../components/Home/Stories/AddStory";
import Stories from "../components/Home/Stories/Stories";
import Story from "../components/Home/Stories/Story";
const ProfileScreen = ({ currUser }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
          {currUser.username}
        </Text>
        <Icon name="menu" style={{ color: "white", fontSize: 20 }} />
      </View>
      {/* TOP PART */}
      <View style={styles.topPart}>
        <View style={styles.image_counts}>
          <AddStory user={currUser} />
          <View style={styles.counts}>
            <View style={styles.count}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                {currUser.posts.length * 200}
              </Text>
              <Text
                style={{ color: "white", fontSize: 10, fontWeight: "bold" }}
              >
                Posts
              </Text>
            </View>
            <View style={styles.count}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                {currUser.followers.length * 231}
              </Text>
              <Text
                style={{ color: "white", fontSize: 10, fontWeight: "bold" }}
              >
                Followers
              </Text>
            </View>
            <View style={styles.count}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                {currUser.following.length * 343}
              </Text>
              <Text
                style={{ color: "white", fontSize: 10, fontWeight: "bold" }}
              >
                Following
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.name_bio}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
            {currUser.name}
          </Text>
          <Text
            style={{ color: "white", fontSize: 15, width: "70%", marginTop: 5 }}
          >
            {currUser.bio}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => console.warn("Edit Profile Pressed")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
          <Pressable
            onPress={() => console.warn("Share Profile Pressed")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Share Profile</Text>
          </Pressable>
        </View>

        <View style={styles.photoGallery}>
          <View style={styles.iconsRow}>
            <MaterialIcon
              style={{ color: "white", fontSize: 25 }}
              name="grid-on"
            />

            <MaterialIcon
              style={{ color: "white", fontSize: 25 }}
              name="assignment-ind"
            />
            <MaterialIcon
              style={{ color: "white", fontSize: 25 }}
              name="bookmark-border"
            />
          </View>
          <FlatList
            data={currUser.posts}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  margin: 0,
                }}
              >
                <Image style={styles.photo} source={{ uri: item.image }} />
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  topPart: { padding: 10 },
  image_counts: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  counts: { flexDirection: "row", marginRight: 10 },
  count: { alignItems: "center", marginRight: 20 },
  name_bio: {
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    width: "40%",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#3B3B3B",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  photoGallery: {
    width: "100%",
    marginTop: 50,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  photos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  photo: {
    height: 100,
    backgroundColor: "red",
  },
});
export default ProfileScreen;
