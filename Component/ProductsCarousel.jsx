import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { fruits } from "../Utilities/Data.js";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { myColors } from "../Utilities/MyColors.js";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice.js";

const ProductsCarousel = ({ data }) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const nav = useNavigation();
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={fruits}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {
                main: item,
              });
            }}
            activeOpacity={0.5}
            style={{
              height: responsiveHeight(30),
              borderWidth: 2,
              borderColor: myColors.secondary,
              width: responsiveWidth(45),
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              style={{
                height: 120,
                width: 120,
                alignSelf: "center",
                resizeMode: "contain",
              }}
              source={{ uri: item.img }}
            />
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", gap: 4 }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{ color: "grey" }}>{item.pieces} Priceg</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  R{item.price}
                </Text>
                {storeData.some((value) => value.name == item.name)}
                <FontAwesome
                  name="plus-square"
                  size={33}
                  color={myColors.secondary}
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsCarousel;
