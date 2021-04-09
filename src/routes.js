import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const appStack = createStackNavigator()

import Home from './pages/home'
import NewCard from './pages/newCard'
export default function Routes() {
  return (
    <NavigationContainer>

      <appStack.Navigator screenOptions={{ headerShown: false }}>
        <appStack.Screen name="Home" component={Home}/>
        <appStack.Screen name="NewCard" component={NewCard}/>
      </appStack.Navigator>

    </NavigationContainer>
  )
}