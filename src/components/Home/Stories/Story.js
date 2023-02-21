import { View, Text, Image, ImageBackground } from "react-native";
const Story = ({ data }) => {
  const { username, image } = data;
  return (
    <View
      style={{
        // height: 50,
        // width: 50,
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 15,
        borderRadius: 25,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
          borderWidth: 2,
          padding: 1,
          marginBottom: 5,
          borderColor: "#fb3958",
        }}
      />
      <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>
        {username}
      </Text>
    </View>
  );
};
export default Story;
