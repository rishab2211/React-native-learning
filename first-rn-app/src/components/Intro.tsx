import { View, Text, StyleSheet, TextInput, Button, Pressable } from "react-native";
import React, { useState } from "react";
import ImageComponent from "./ImageComponent";

const Intro = (props: any) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [output, setOutput] = useState<JSX.Element>();

  const handleClick = () => {
    console.log("u hit so hard");
    setOutput(
      <View>
        <Text style={styles.text}>My name is {name}</Text>
        <Text style={styles.text}>age is {age}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageComponent />
        <Pressable style={styles.pressableButton} onLongPress={handleClick}>
          <Text>Press me</Text>
        </Pressable>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setName}
          value={name}
          placeholder="Write your name here..."
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(t) => setAge(Number(t) || 0)}
          value={age.toString()}
          placeholder="Write your age here..."
          keyboardType="numeric"
        />
        <View style={styles.buttonStyle}>
          <Button title="render" onPress={handleClick} />
          {output}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 display:"flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  pressableButton: {
    alignItems: "center", 
    justifyContent: "center",
  },
  buttonStyle: {
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    borderColor: "orange",
    borderWidth: 1,
    padding: 4,
    width: "80%", 
    marginBottom: 10,
  },
  innerContainer: {
    borderWidth: 4,
    borderColor: "orange",
    borderRadius:10,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    width: "80%",
    alignSelf: "center",
    
  },
  text: {
    fontSize: 20,
    color: "orange",
  },
});

export default Intro;
