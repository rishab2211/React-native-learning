import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { cardStyle } from "./styles";
// Define the type for props
interface CardComponentProps {
  title: string;
  iconSource: React.ReactNode;
  num: string;
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <View style={cardStyle.container}>
      <View style={cardStyle.innerContainer}>
        <View style={cardStyle.innerInnerContainer}>
          <Text style={cardStyle.title}>{props.title}</Text>
          <View>{props.iconSource}</View>
        </View>
        <View >
          <Text style={cardStyle.num}>{props.num}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;
