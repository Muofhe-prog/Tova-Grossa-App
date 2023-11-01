import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { myColors } from "../Utilities/MyColors";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price;
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: "white",
        gap: 15,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "500" }}>
        My Cart
      </Text>
      <View style={{ flex: 0.9, justifyContent: "flex-end" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{}}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(18),

                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 0.35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ height: 120, width: 120, resizeMode: "contain" }}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>

              <View
                style={{
                  flex: 0.7,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <EvilIcons
                    name="close"
                    size={25}
                    color="grey"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                </View>
                <Text style={{ fontSize: 17, color: "grey", marginTop: 5 }}>
                  {item.pieces}, Price
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",

                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <AntDesign
                      name="minuscircleo"
                      size={28}
                      color={myColors.secondary}
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    />
                    <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                    <AntDesign
                      name="pluscircleo"
                      size={28}
                      color={myColors.secondary}
                      onPress={() => {
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQuantity(item));
                        }
                      }}
                    />
                  </View>

                  <Text style={{ fontSize: 23, fontWeight: "600" }}>
                    R{item.quantity * item.price}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Orderplaced");
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
          <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
            <Text
              style={{
                color: myColors.primary,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Checkout
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
              R{amount}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
