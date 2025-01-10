import { View, Text } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { footerNavStyle } from "./styles";
const FooterNav = () => {
  return (
    <View style={footerNavStyle.container}>
      <View style={footerNavStyle.innerContainer}>
        <Feather name="home" size={24} color="black" />
        <Text>home</Text>
      </View>
      <View style={footerNavStyle.innerContainer}>
        <AntDesign name="earth" size={24} color="black" />
        <Text>Career</Text>
      </View>
      <View style={footerNavStyle.innerContainer}>
        <MaterialCommunityIcons
          name="plus-box-outline"
          size={24}
          color="black"
        />
        <Text>create job</Text>
      </View>
      <View style={footerNavStyle.innerContainer}>
        <AntDesign name="search1" size={24} color="black" />
        <Text>search</Text>
      </View>
      <View style={footerNavStyle.innerContainer}>
        <MaterialIcons name="people-alt" size={24} color="black" />
        <Text>Account</Text>
      </View>
    </View>
  );
};

export default FooterNav;
