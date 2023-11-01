import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Dropbox from "../Component/Dropbox";
import { myColors } from "../Utilities/MyColors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const Details = ({ route }) => {
  const storeData = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const productData = route.params.main;
  const { name, price, pieces, img } = productData;

  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: "white" }}>
      <StatusBar backgroundColor="white" />
      <View>
        <Image
          resizeMode="contain"
          style={{
            height: 200,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          source={{ uri: img }}
        />
        <View
          style={{
            flexDirection: "row",

            justifyContent: "space-between",
            position: "absolute",
            width: "100%",
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Ionicons
            onPress={() => {
              nav.goBack();
            }}
            name="chevron-back"
            size={28}
            color="black"
          />
          <Octicons name="share" size={28} color="black" />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, color: "black", fontWeight: "600" }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <MaterialIcons name="favorite-border" size={30} color="black" />
        </View>
        <Text style={{ marginTop: 5, fontSize: 15, color: "grey" }}>
          {pieces}, Price
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
          }}
        >
          R{price}
        </Text>
        <Dropbox />
        <View
          style={{ flex: 0.9, justifyContent: "flex-end", paddingTop: 100 }}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(productData));
              nav.navigate("Cart");
            }}
            activeOpacity={0.8}
            style={{
              backgroundColor: myColors.secondary,
              borderRadius: 10,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: myColors.primary,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
