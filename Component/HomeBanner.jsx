import { View, Text, Image } from "react-native";
import React from "react";

const HomeBanner = () => {
  return (
    <View>
      <Image
        style={{ alignSelf: "center" }}
        source={require("../assets/banner.png")}
      />
    </View>
  );
};

export default HomeBanner;
