import React from 'react'
import { Text, View } from 'react-native'

function Banner(props) {
  return (
    <View
      style={{
        backgroundColor: props.bannerColor,
        padding: 20,
        margin: 5,
        borderRadius: 4,
      }}
    >
      <Text>{props.bannerTitle}</Text>
    </View>
  )
}

export default Banner
