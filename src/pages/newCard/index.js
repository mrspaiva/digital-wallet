import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import {styles} from './styles';
import Card from '../../components/Card'


export default function newCard() {
  const navigation = useNavigation()
  
  function navigationToNewCard() {
    navigation.navigate('Home')
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar cartão</Text>
      <Card />

      <Text style={styles.label}>NOME DO CARTÃO</Text>
      <TextInput style={styles.input} placeholder="Nome do cartão"/>

      <Text style={styles.label}>NOME COMPLETO</Text>
      <TextInput style={styles.input} placeholder="Nome Completo"/>

      <Text style={styles.label}>NÚMERO</Text>
      <TextInput 
      style={styles.input} 
      placeholder="1234 1234 1234 1234"
      keyboardType="numeric" 
      />

      <TouchableOpacity 
      style={styles.addButton}
      onPress={navigationToNewCard}
      >
        <Text style={styles.addButtonText}>ADICIONAR</Text>
      </TouchableOpacity>

    </View>
  );
}
