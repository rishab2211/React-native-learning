import { View } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import Intro from '../components/Intro'

const detail = {
    name : "rishab",
    age : 21
}
const Index = () => {
  return (
    <View>
      <Intro {...detail} />
    </View>
  )
}

export default Index