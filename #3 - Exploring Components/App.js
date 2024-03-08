import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  ActivityIndicator,
} from 'react-native'

function App() {
  const sayHello = () => {
    alert('Second button clicked')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.space} />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => alert('First Button clicked')}
      >
        <Text style={styles.buttonText}>Say Hello</Text>
      </TouchableOpacity>

      <Button title="Press me" onPress={sayHello} />

      <Image source={require('./assets/security.png')} style={styles.image} />

      <Switch value={true} />

      <ActivityIndicator style={styles.activityIndicator} />

      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
      <Text style={styles.text}>Some Text</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  space: {
    height: 100,
  },
  primaryButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: 100,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  activityIndicator: {
    width: 50,
    marginVertical: 10,
  },
  text: {
    marginVertical: 20,
  },
})

export default App
