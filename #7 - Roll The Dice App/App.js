import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const diceImages = {
  1: require('./assets/dice_1.png'),
  2: require('./assets/dice_2.png'),
  3: require('./assets/dice_3.png'),
  4: require('./assets/dice_4.png'),
  5: require('./assets/dice_5.png'),
  6: require('./assets/dice_6.png'),
}

function App() {
  const [diceValues, setDiceValues] = useState({
    dice1: 1,
    dice2: 1,
  })

  function rollDice() {
    const dice1_RandomNum = Math.floor(Math.random() * 6) + 1
    const dice2_RandomNum = Math.floor(Math.random() * 6) + 1
    setDiceValues({ dice1: dice1_RandomNum, dice2: dice2_RandomNum })
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={diceImages[diceValues.dice1]}
          style={{ width: 128, height: 128 }}
        />
        <Image
          source={diceImages[diceValues.dice2]}
          style={{ width: 128, height: 128, marginStart: 20 }}
        />
      </View>

      <TouchableOpacity onPress={rollDice}>
        <View
          style={{
            backgroundColor: '#F39C12',
            marginTop: 40,
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: 'white' }}>Roll The Dice</Text>
        </View>
      </TouchableOpacity>
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

export default App
