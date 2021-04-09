import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Cartões</Text>
        <TouchableOpacity 
        style={styles.addCard}
        onPress={() => {}}
        >
          <Feather name="plus" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

