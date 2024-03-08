import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import * as Speech from 'expo-speech'
import { TextInput } from 'react-native-paper'

function App() {
  const [inputText, setInputText] = useState(
    'Please type something in input field'
  )
  function sayThis() {
    // const words = 'Hello jayesh'
    Speech.speak(inputText)
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="write words to speak"
        onChangeText={(text) => setInputText(text)}
      />
      <TouchableOpacity onPress={sayThis} style={styles.button}>
        <Text>Say this</Text>
      </TouchableOpacity>
      <Text>Welcome to the text to speech application</Text>
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
  button: {
    backgroundColor: '#f1c40f',
    padding: 20,
    margin: 10,
    borderRadius: 4,
  },
})

export default App
