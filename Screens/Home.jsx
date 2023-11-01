import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Component/HomeIcon";
import HomeSearch from "../Component/HomeSearch";
import HomeBanner from "../Component/HomeBanner";
import ProductTitle from "../Component/ProductTitle";
import ProductsCarousel from "../Component/ProductsCarousel";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 20 }}
      >
        <View style={{ gap: 20, paddingTop: 10 }}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductTitle title="Exclusive Offers" />
          <ProductsCarousel />
          <ProductTitle title="Best Selling" />
          <ProductsCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
