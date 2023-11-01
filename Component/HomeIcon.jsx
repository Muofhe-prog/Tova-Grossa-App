import { View, Text, Image } from "react-native";
import React from "react";

const HomeIcon = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: 55, height: 55 }}
        source={require("../assets/icon.png")}
      />
    </View>
  );
};

export default HomeIcon;
