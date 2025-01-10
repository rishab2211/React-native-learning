import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { headerStyles } from "./styles";
const HeaderComponent = () => {
  return (
    <View style={headerStyles.container}>
      <View>
        <Octicons name="three-bars" size={24} color="black" />
      </View>
      <View style={headerStyles.innerContainer} >
        <Text style={headerStyles.dateStyle}>Tue, 05 Dec</Text>
        <Text style={headerStyles.greetTextStyle}>Hi, Olivia Reiss</Text>
      </View>
      <View>
        <FontAwesome name="bell-o" size={24} color="black" />
      </View>
    </View>
  );
};


export default HeaderComponent;
