import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utilities/MyColors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { authentication, database } from "./Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const Signup = () => {
  const [isVisbile, setisVisbile] = useState(true);
  const [userCrendetials, setuserCrendetials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = userCrendetials;

  const uid = uuid.v4();

  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        nav.navigate("Login");
        setDoc(doc(database, "users", uid), {
          username: name,
          email: email,
          id: authentication.currentUser.uid,
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

        console.error(error);
      });
  };

  const nav = useNavigation();
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
            maxLength={9}
            value={name}
            onChangeText={(val) => {
              setuserCrendetials({ ...userCrendetials, name: val });
            }}
            keyboardType="name-phone-pad"
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
            placeholder="Username"
          />

          <TextInput
            value={email}
            onChangeText={(val) => {
              setuserCrendetials({ ...userCrendetials, email: val });
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
                setuserCrendetials({ ...userCrendetials, password: val });
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
            numberOflines={2}
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "black",
              marginTop: 10,
              letterSpacing: 0.7,
              lineHeight: 25,
              width: "95%",
              opacity: 0.7,
            }}
          >
            By continuing you agree to our Terms and Privacy policy.
          </Text>
          <TouchableOpacity
            onPress={userAccount}
            style={{
              backgroundColor: myColors.secondary,
              marginTop: 30,
              height: 55,
              borderRadius: 30,
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
              Sign Up
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
            <Text style={{ fontSize: 16 }}>Already have an Account?</Text>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  nav.navigate("Login");
                }}
                style={{
                  fontSize: 15,
                  color: myColors.secondary,
                  fontWeight: "600",
                }}
              >
                Login now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
