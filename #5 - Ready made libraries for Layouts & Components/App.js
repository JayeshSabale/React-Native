import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements' // Import Input from react-native-elements
import { Button } from 'react-native-paper' // Import Button from react-native-paper

function App() {
  return (
    <View style={styles.container}>
      {/* Input component from react-native-elements */}
      <Input
        shadow={2}
        placeholder="Enter your name"
        inputStyle={{
          // Style for input text
          color: 'black',
        }}
        inputContainerStyle={{
          // Style for input container
          backgroundColor: 'lightgray',
          borderRadius: 10,
          paddingHorizontal: 10,
          width: '60%',
          marginHorizontal: 80,
        }}
      />
      {/* Button component from react-native-paper */}
      <Button
        mode="contained"
        onPress={() => alert('React Native Paper button pressed')}
        style={styles.button}
      >
        Submit
      </Button>
      {/* Badge component from native-base */}
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
    marginTop: 10, // Add margin for separation from input field
  },
})

export default App
