import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utilities/MyColors";
import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "./Firebaseconfig";
const Login = () => {
  const nav = useNavigation();
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isVisbile, setisVisbile] = useState(true);

  const { email, password, name } = loginCredentials;
  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((val) => {
        nav.replace("Home");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };
  return (
    <SafeAreaView style={{ backgroundColor: myColors.primary, flex: 1 }}>
      <StatusBar />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ alignSelf: "center", marginTop: 20 }}
          source={require("../assets/image.png")}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setloginCredentials({ ...loginCredentials, email: val });
            }}
            keyboardType="email-address"
            style={{
              backgroundColor: myColors.primary,
              marginTop: 30,
              height: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#707070",
              paddingLeft: 20,
            }}
            placeholder="Email"
          />

          <View
            style={{
              borderColor: "#707070",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              borderWidth: 1,

              paddingLeft: 20,
              marginTop: 30,
              height: 50,
              borderRadius: 25,
              paddingRight: 20,
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setloginCredentials({ ...loginCredentials, password: val });
              }}
              secureTextEntry={true}
              maxLength={6}
              keyboardType="ascii-capable"
              style={{
                fontSize: 17,
                marginTop: 5,

                flex: 0.9,
              }}
              placeholder="Password"
            />
            <Ionicons
              onPress={() => {
                setisVisbile(!isVisbile);
              }}
              name="ios-eye-off-outline"
              size={24}
              color="black"
            />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "black",
              marginTop: 10,

              textAlign: "right",
              width: "95%",
            }}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={loginUser}
            style={{
              backgroundColor: myColors.secondary,
              marginTop: 30,
              height: 55,
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
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
