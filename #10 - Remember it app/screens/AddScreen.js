import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { TextInput, Text } from 'react-native-paper'
import { Select, NativeBaseProvider } from 'native-base'

import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage' // Updated import statement

function AddScreen() {
  const [formData, setFormData] = useState({
    Name: '',
    dataTxt: '', // Changed key from 'Data' to 'dataTxt'
    Type: '',
  })

  const navigation = useNavigation()

  const [error, setError] = useState(false)

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

  async function rememberData() {
    if (!formData.Name || !formData.dataTxt || !formData.Type) {
      setError(true)
      return
    }
    try {
      await AsyncStorage.setItem(
        Date.now().toString(),
        JSON.stringify(formData)
      )
      navigation.goBack()
    } catch (error) {
      console.log('Error while saving data:', error)
      // Handle error gracefully, e.g., show an error message to the user
    }
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={formData.Name}
          onChangeText={(value) => handleChange('Name', value)}
        />
        {!formData.Name && error && (
          <Text style={styles.errorText}>Name is required</Text>
        )}

        <TextInput
          label="Data"
          value={formData.dataTxt} // Changed key from 'Data' to 'dataTxt'
          style={{ marginTop: 20 }}
          onChangeText={(value) => handleChange('dataTxt', value)} // Changed key from 'Data' to 'dataTxt'
        />
        {!formData.dataTxt &&
          error && ( // Changed key from 'Data' to 'dataTxt'
            <Text style={styles.errorText}>Data is required</Text>
          )}

        <Text style={{ marginTop: 20 }}>Add Screen</Text>
        <Select
          selectedValue={formData.Type}
          minWidth={200}
          placeholder="Select Type"
          onValueChange={(value) => handleChange('Type', value)}
        >
          <Select.Item label="Gmail" value="Gmail" />
          <Select.Item label="Phone" value="Phone" />
          <Select.Item label="Links" value="Links" />
          <Select.Item label="Website" value="Website" />
          <Select.Item label="Location" value="Location" />
        </Select>
        {!formData.Type && error && (
          <Text style={styles.errorText}>Type is required</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={rememberData}>
          <Text style={styles.buttonText}>Remember this</Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default AddScreen
