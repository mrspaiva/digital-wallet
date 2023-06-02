import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Card from '../../components/Card'
import RadioButton from '../../components/RadioButton'
import { CardContext } from '../../context/CardContext'
import Trash from '../../../assets/trash'
import Eye from '../../../assets/eye'

export default function home() {
  const {cards, deleteCard } = useContext(CardContext) 
  
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

      <View style={{flexDirection: 'row'}}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        decelerationRate={'normal'}
        snapToInterval={345}
        snapToAlignment={"center"}
        >
          {cards.map((card) => (
            <View 
            style={{marginHorizontal: 10}}
            >
              <Card 
              {...card}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.radioButton}>
        <RadioButton />
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
        onPress={() => deleteCard(cards.cardNumber)}
        >
          <Trash />
          <Text style={styles.actionButtonDelete}>APAGAR CARTÃO</Text>
        </TouchableOpacity>
    </View>
  )
}

