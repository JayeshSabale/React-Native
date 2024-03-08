import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'red',
          borderRadius: 10,
        }}
      />
      <View
        style={{
          marginStart: 10,
          width: 50,
          height: 50,
          backgroundColor: 'green',
          borderRadius: 10,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
