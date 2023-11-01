import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "../Utilities/Data";
import { AntDesign } from "@expo/vector-icons";

const Dropbox = () => {
  const [myIndex, setIndex] = useState(); // use square brackets to destructure
  const [toggle, settoggle] = useState(false);
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={Dropdown}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setIndex(index);
                settoggle(!toggle);
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 2,
                marginBottom: 10,
                paddingVertical: 15,
              }}
            >
              <Text>{item.title}</Text>
              <AntDesign
                name={myIndex === index && toggle ? "down" : "right"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {myIndex === index && toggle ? <Text>{item.content}</Text> : null}
          </View>
        )}
      />
    </View>
  );
};

export default Dropbox;
