import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Card from '../../components/Card'
import RadioButton from '../../components/RadioButton'
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

      <Card />

      <View style={styles.radioButton}>
        <RadioButton selected/>
        <RadioButton />
        <RadioButton />
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

