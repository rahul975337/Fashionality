import { View, Text, ScrollView } from "react-native";
import { storiesData } from "../../../data/storiesData";
import AddStory from "./AddStory";

import Story from "./Story";
const Stories = ({ currUser }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <AddStory user={currUser} />
        {storiesData.map((story) => {
          return <Story key={story.id} data={story} />;
        })}
      </ScrollView>
    </View>
  );
};
export default Stories;
