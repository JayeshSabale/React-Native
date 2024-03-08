import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Banner from './Banner'

export default function App() {
  return (
    <View style={styles.container}>
      <Banner bannerTitle="Jayesh" bannerColor="red" />

      <Banner bannerTitle="Tipu" bannerColor="#00FF00" />

      <Text>
        Created another component as Banner and passed data from app component
        to Banner component!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
