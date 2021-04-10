import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import Trash from '../../../assets/trash'
import Eye from '../../../assets/eye'

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

      <View style={styles.viewCard}>
        <View style={styles.infoCardHeader}>
          <Text style={styles.infoTextCard}>Nome do cartão</Text>
          <Text style={styles.infoTextCard}>Bandeira</Text>
        </View>

        <View style={styles.infoCardFooter}>
          <Text style={styles.cardName}>Nome Completo</Text>
          <Text style={styles.cardNumber}>1234 1234 1234 1234</Text>
        </View>
      </View>

      
    </View>
  )
}

