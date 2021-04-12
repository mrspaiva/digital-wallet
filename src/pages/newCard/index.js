import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import {styles} from './styles';
import Card from '../../components/Card'


export default function newCard() {
  const [cardName, setCardName] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const navigation = useNavigation()
  
  function navigationToNewCard() {
    navigation.navigate('Home')
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar cartão</Text>
      <Card 
      cardNameValue={cardName}
      nameValue={name}
      numberValue={number}
      />

      <Text style={styles.label}>NOME DO CARTÃO</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Nome do cartão"
      value={cardName}
      onChangeText={cardName => setCardName(cardName)}
      />

      <Text style={styles.label}>NOME COMPLETO</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Nome Completo"
      value={name}
      onChangeText={name => setName(name)}
      />

      <Text style={styles.label}>NÚMERO</Text>
      <TextInput 
      style={styles.input} 
      placeholder="1234 1234 1234 1234"
      keyboardType="numeric" 
      value={number}
      onChangeText={number => setNumber(number)}
      />

      <TouchableOpacity 
      style={styles.addButton}
      title='submit'
      onPress={navigationToNewCard}
      >
        <Text style={styles.addButtonText}>ADICIONAR</Text>
      </TouchableOpacity>

    </View>
  );
}
