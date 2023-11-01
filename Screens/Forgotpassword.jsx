import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utilities/MyColors";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";

const Forgotpassword = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        gap: 20,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          style={{ tintColor: "#009DD1", height: 65, width: 65 }}
          source={require("../assets/icon.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontSize: 30, fontWeight: "600", color: myColors.secondary }}
        >
          Tova
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>Grossa</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          style={{ height: 210, width: 250 }}
          source={require("../assets/image.png")}
        />
      </View>

      <View style={{ gap: -10, marginTop: 20 }}>
        <TextInput
          style={{
            backgroundColor: myColors.primary,
            marginTop: 20,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#707070",
            color: "black",
            paddingHorizontal: 20,
          }}
          placeholder="Email"
        />
        <Text
          style={{
            fontSize: 19,
            color: myColors.secondary,
            fontWeight: "500",
          }}
          placeholder="Email"
        ></Text>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Signup");
          }}
          style={{
            backgroundColor: myColors.secondary,
            marginTop: 20,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 19,
              color: myColors.primary,
              fontWeight: "500",
            }}
          >
            Send Link
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 16 }}>Dont have an Account?</Text>
          <TouchableOpacity>
            <Text
              onPress={() => {
                nav.navigate("Signup");
              }}
              style={{
                fontSize: 15,
                color: myColors.secondary,
                fontWeight: "600",
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Forgotpassword;
