import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { myColors } from "../Utilities/MyColors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Signup from "./Signup";

const Splash = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.replace("Welcome");
    }, 6000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: myColors.primary,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <Image
          style={{ tintColor: "#009DD1", height: 75, width: 65 }}
          source={require("../assets/icon.png")}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color: myColors.secondary,
            }}
          >
            Tova
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "600" }}>Grossa</Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;
