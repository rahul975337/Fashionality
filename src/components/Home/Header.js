import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Logo from "./Logo";
import { useState } from "react";
const Header = () => {
  const [showBadge, setShowBadge] = useState(true);
  return (
    <View style={styles.header}>
      <Logo />
      <View style={styles.icons}>
        <AntDesignIcon style={styles.icon} name="hearto" />
        <TouchableOpacity>
          {showBadge && (
            <View style={styles.unreadBadge}>
              <Text style={styles.badgeText}>21</Text>
            </View>
          )}
          <FeatherIcon style={styles.icon} name="send" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    margin: 10,
    color: "white",
    fontSize: 25,
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 25,
    bottom: 25,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  badgeText: {
    color: "white",
  },
});
export default Header;
