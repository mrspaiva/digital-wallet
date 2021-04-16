import React, { useContext } from 'react'
import { View, Text } from "react-native";
import styles from './CardStyle'
import { LinearGradient } from 'expo-linear-gradient';

export default function Card({NomedoCartao, NomeCompleto, NumeroCartao}) {

  return (
    <View style={styles.viewCard}>
      <LinearGradient
        colors={['rgba(236, 0, 140, 0.8)', 'rgba(252, 103, 103, 0.8)']}
        start={ {x: 1, y: 0.8} }
        style={styles.background}
      />
      <View style={styles.infoCardHeader}>
        <Text 
        style={styles.infoTextCard}>
        {NomedoCartao ? NomedoCartao : 'Nome do Cartão'}
        </Text>
        <Text style={styles.infoTextCard}>Bandeira</Text>
      </View>

      <View style={styles.infoCardFooter}>
        <Text style={styles.cardName}>
          {NomeCompleto ? NomeCompleto : 'Nome Completo'}
        </Text>
        <Text style={styles.cardNumber}>
          {NumeroCartao ? NumeroCartao : '1234 1234 1234 1234'}
        </Text>
      </View>
    </View>
  )
}