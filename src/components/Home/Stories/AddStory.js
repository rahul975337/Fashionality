import { View, Text, Image, ImageBackground } from "react-native";
const AddStory = ({ user }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 15,
        borderRadius: 25,
      }}
    >
      <Image
        source={{
          uri: user.image,
        }}
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
          borderWidth: 1,
          padding: 1,
          marginBottom: 5,
          borderColor: "white",
        }}
      />
      <View
        style={{
          height: 18,
          width: 18,
          borderRadius: 18 / 2,
          alignItems: "center",
          backgroundColor: "#458eff",
          position: "absolute",
          zIndex: 100,
          bottom: 15,
          right: 5,
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>+</Text>
      </View>
      <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>
        Your Story
      </Text>
    </View>
  );
};
export default AddStory;
