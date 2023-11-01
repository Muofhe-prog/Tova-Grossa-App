import { View, Text } from "react-native";
import React from "react";
import { myColors } from "../Utilities/MyColors";

const ProductTitle = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" }}>{title}</Text>
      <Text style={{ fontSize: 16, color: myColors.secondary }}>See All</Text>
    </View>
  );
};

export default ProductTitle;
