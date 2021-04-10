import React from 'react'
import { View, Text } from "react-native";
import styles from './CardStyle'

export default function Card() {
  return (
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
  )
}