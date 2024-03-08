import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Audio } from 'expo-av'

const drumKit = {
  bass: require('./assets/sounds/bass.mp3'),
  bass2: require('./assets/sounds/bass2.mp3'),
  bass3: require('./assets/sounds/bass3.mp3'),
  cymbal: require('./assets/sounds/cymbal.mp3'),
  cymbal2: require('./assets/sounds/cymbal2.mp3'),
  drumstick: require('./assets/sounds/drumstick.mp3'),
  hihat: require('./assets/sounds/hihat.mp3'),
  snare: require('./assets/sounds/snare.mp3'),
  tom: require('./assets/sounds/tom.mp3'),
}

const colors = {
  bass: '#c0392b',
  cymbal: '#2980b9',
  drumstick: '#34495e',
  hihat: '#8e44ad',
  snare: '#d35400',
  tom: '#95a5a6',
}

export default function App() {
  async function playSound(sound) {
    try {
      const soundObject = new Audio.Sound()
      await soundObject.loadAsync(drumKit[sound])
      await soundObject.playAsync()
      soundObject.setOnPlaybackStatusUpdate(async (status) => {
        if (status.didJustFinish) {
          await soundObject.unloadAsync()
        }
      })
    } catch (error) {
      console.error('Error playing sound:', error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[{ backgroundColor: colors.bass }, styles.button]}
          onPress={() => playSound('bass')}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: colors.bass }, styles.button]}
          onPress={() => playSound('bass2')}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: colors.bass }, styles.button]}
          onPress={() => playSound('bass3')}
        ></TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[{ backgroundColor: colors.cymbal }, styles.button]}
          onPress={() => playSound('cymbal')}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: colors.cymbal }, styles.button]}
          onPress={() => playSound('cymbal2')}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: colors.drumstick }, styles.button]}
          onPress={() => playSound('drumstick')}
        ></TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[{ backgroundColor: colors.hihat }, styles.button]}
          onPress={() => playSound('hihat')}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: colors.snare }, styles.button]}
          onPress={() => playSound('snare')}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: colors.tom }, styles.button]}
          onPress={() => playSound('tom')}
        ></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    flex: 1,
    height: 130,
    margin: 10,
    borderRadius: 4,
  },
})
