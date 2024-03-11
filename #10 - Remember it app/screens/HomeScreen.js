import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Linking,
  Alert,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function HomeScreen() {
  const navigation = useNavigation()
  const [items, setItems] = useState([])

  const getAllData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const multiData = await AsyncStorage.multiGet(keys)
      setItems(multiData)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
      setItems((prevItems) => prevItems.filter((item) => item[0] !== key))
      console.log('Item deleted successfully')
    } catch (error) {
      console.log('Error deleting item:', error)
    }
  }

  const openLink = (type, dataTxt) => {
    try {
      let url
      switch (type) {
        case 'Links':
        case 'Website':
          url =
            dataTxt.startsWith('http://') || dataTxt.startsWith('https://')
              ? dataTxt
              : 'https://' + dataTxt
          break
        case 'Location':
          url = `https://www.google.com/maps/place/${encodeURIComponent(
            dataTxt
          )}`
          break
        case 'Phone':
          url = `tel:${dataTxt}`
          break
        case 'Gmail':
          url = `mailto:${dataTxt}`
          break
        default:
          console.error('Unsupported link type:', type)
          return
      }
      Linking.openURL(url)
    } catch (error) {
      console.error('Error opening link:', error)
    }
  }

  const renderItem = ({ item }) => {
    const rememberData = JSON.parse(item[1])
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => {
            openLink(rememberData.Type, rememberData.dataTxt)
          }}
          style={styles.itemTouchable}
        >
          <View style={styles.item}>
            <Text style={styles.itemName}>{rememberData.Name}</Text>
            <Text style={styles.itemData}>{rememberData.dataTxt}</Text>
            <Text style={styles.itemType}>{rememberData.Type}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Confirm Deletion',
              'Are you sure you want to delete this item?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'Delete',
                  onPress: () => deleteItem(item[0]),
                  style: 'destructive',
                },
              ]
            )
          }}
          style={styles.deleteButton}
        >
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    )
  }

  useFocusEffect(
    React.useCallback(() => {
      getAllData()
    }, [])
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item[0].toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Add')
        }}
        style={styles.addButton}
      >
        <MaterialIcons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EFEFEF',
    marginVertical: 5,
    borderRadius: 8,
    padding: 10,
  },
  itemTouchable: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemData: {
    color: '#f1c40f',
  },
  itemType: {
    fontStyle: 'italic',
    marginTop: 5,
  },
  deleteButton: {
    marginLeft: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f1c40f',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
})

export default HomeScreen
