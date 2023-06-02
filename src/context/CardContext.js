import React, { createContext, useState } from 'react'

export const CardContext = createContext()

export default function CardProvider({children}) {
  const [cards, setCards] = useState([])

  function addCard(cardName, userFullname, cardNumber) {
    setCards([...cards, {
      cardName,
      userFullname,
      cardNumber,
    }])
  }

  function deleteCard(cardNumber) {
      const newCard = cards.filter(card => card.cardNumber !== cardNumber)
      setCards([...newCard])
  }

  return (
    <CardContext.Provider value={{
      addCard, 
      deleteCard, 
      cards, 
      }}>
      {children}
    </CardContext.Provider>
  )
}