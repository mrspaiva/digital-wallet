import React, { useContext } from 'react'
import { View, Text } from "react-native";
import styles from './CardStyle'
import { LinearGradient } from 'expo-linear-gradient';
import { CardContext } from '../context/CardContext';

export default function Card() {
  const { 
    addCard,
    cardName,
    setCardName,
    name,
    setName,
    number,
    setNumber
  } = useContext(CardContext)


  return (
    <View 
      style={styles.viewCard}
      // key={{ id : Math.random().toString()}}
    >
      <LinearGradient
        colors={['rgba(236, 0, 140, 0.8)', 'rgba(252, 103, 103, 0.8)']}
        start={ {x: 1, y: 0.8} }
        style={styles.background}
      />
      <View style={styles.infoCardHeader}>
        <Text style={styles.infoTextCard}>
        {cardName ? cardName : 'Nome do Cartão'}
        </Text>
        <Text style={styles.infoTextCard}>Bandeira</Text>
      </View>

      <View style={styles.infoCardFooter}>
        <Text style={styles.cardName}>
          {name ? name : 'Nome Completo'}
        </Text>
        <Text style={styles.cardNumber}>
          {number ? number : '1234 1234 1234 1234'}
        </Text>
      </View>
    </View>
  )
}