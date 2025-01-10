import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text>Profile image</Text>
      <Image source={require('../assets/user2.png')} style={styles.imageStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle : {
        width:100,
        height:100,
        borderRadius:50
    },
   
})

export default ImageComponent