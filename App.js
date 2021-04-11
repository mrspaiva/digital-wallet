import React from 'react';
import Routes from './src/routes'
  import { useFonts, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway'

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  )
}