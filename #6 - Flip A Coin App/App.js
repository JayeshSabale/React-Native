import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

function App() {
  const [flip, setFlip] = React.useState(1)
  function randomNumber() {
    const Number = Math.floor(Math.random() * 2) + 1
    setFlip(Number)
  }

  return (
    <View style={styles.container}>
      {flip === 1 && (
        <Image
          source={require('./assets/coin_h.png')}
          style={{ width: 150, height: 150 }}
        />
      )}
      {flip === 2 && (
        <Image
          source={require('./assets/coin_t.png')}
          style={{ width: 150, height: 150 }}
        />
      )}

      <TouchableOpacity onPress={randomNumber} style={styles.button}>
        <Text>Flip a Coin</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f1c40f',
    padding: 20,
    margin: 10,
    borderRadius: 4,
  },
})

export default App
