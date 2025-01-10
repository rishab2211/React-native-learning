import { View, Image, Text } from "react-native";
import React from "react";
import { chartCardStyle } from "./styles";

const ChartCard = () => {
  return (
    <View style={chartCardStyle.container}>
      <View style={chartCardStyle.chartHeadStyle}>
        <View>
          <Text style={chartCardStyle.chartTitleSyle}>Jobs analytics</Text>
        </View>
        <View style={chartCardStyle.statusContainer}>
          <View style={chartCardStyle.ekSaath}>
            <Image
              style={chartCardStyle.green}
              source={require("../assets/green.png")}
              width={10}
              height={10}
            />
            <Text style={chartCardStyle.appliedStyle}>Applied</Text>
          </View>
          <View style={chartCardStyle.ekSaath}>
            <Image
              style={chartCardStyle.blue}
              source={require("../assets/blue.png")}
              width={5}
              height={5}
            />
            <Text style={chartCardStyle.qualifiedStyle}>Qualified</Text>
          </View>
        </View>
      </View>
      <View style={chartCardStyle.imageStyle}>
        <Image
          source={require("../assets/chart.png")}
          style={chartCardStyle.image}
        />
      </View>
    </View>
  );
};

export default ChartCard;
