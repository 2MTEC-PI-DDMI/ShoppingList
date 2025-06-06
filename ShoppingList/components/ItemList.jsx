import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ItemList({ item, markItem, unmarkItem, removeItem }) {
  return (
    <View style={styles.itemList}>
      <Text style={item?.bought ? styles.itemBought : styles.itemToBuy}>
        {item.name}
        </Text>
      {!item?.bought ? (
      <TouchableOpacity style={styles.actionIcon} onPress={() => markItem(item.id)}>
        <Ionicons name='bag-check-outline' size={24} color='#fff' />
      </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.actionIcon} onPress={() => unmarkItem(item.id)}>
        <Ionicons name='bag-remove-outline' size={24} color='#fff' />
      </TouchableOpacity>
      )}
      <TouchableOpacity
      onPress={() =>removeItem(item.id)} 
      style={[styles.actionIcon, { backgroundColor: 'darkred'}]}>
        <Ionicons name='trash-bin-outline' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    backgroundColor: '#000000c0',
    padding: 15,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemToBuy: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textDecorationLine: 'none',
    paddingLeft: 12,
  },
  itemBought: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textDecorationLine: 'none',
    textDecorationLine: 'line-through',
    paddingLeft: 12,
  },
  actionIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  }
})