import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import Trash from '../../../assets/trash'
import Eye from '../../../assets/eye'

export default function home() {
  const navigation = useNavigation()

  function navigationToNewCard() {
    navigation.navigate('NewCard')
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.text}>Cartões</Text>
        <TouchableOpacity 
        style={styles.addCard}
        onPress={navigationToNewCard}
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

      <Text style={styles.actionText}>Ações</Text>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => {}}
        >
          <Eye />
          <Text style={styles.actionButtonHide}>ESCONDER NÚMERO</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => {}}
        >
          <Trash />
          <Text style={styles.actionButtonDelete}>APAGAR CARTÃO</Text>
        </TouchableOpacity>
    </View>
  )
}

