import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/headerComponent";
import CardComponent from "../components/cardComponent";
import { indexStyles } from "../components/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ChartCard from "../components/chartCard";
import FooterNav from "../components/footerNav";
const Index = () => {
  return (
    <View style={indexStyles.container}>
      <Text>
        <HeaderComponent />
        <View style={indexStyles.cards}>
          <CardComponent
            title="Active jobs"
            iconSource={
              <FontAwesome name="shopping-bag" size={20} color="black" />
            }
            num="24"
          />
          <CardComponent
            title="Candidates"
            iconSource={
              <Ionicons name="people-outline" size={20} color="black" />
            }
            num="298"
          />
          <CardComponent
            title="Events"
            iconSource={<Entypo name="calendar" size={20} color="black" />}
            num="54"
          />
          <CardComponent
            title="To-dos"
            iconSource={
              <MaterialCommunityIcons
                name="checkbox-multiple-marked-outline"
                size={20}
                color="black"
              />
            }
            num="48"
          />
        </View>
        <ChartCard/>
        
      </Text>
      <FooterNav/>
    </View>
  );
};

export default Index;
