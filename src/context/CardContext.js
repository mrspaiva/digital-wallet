import React, { createContext, useState } from 'react'

export const CardContext = createContext()

export default function CardProvider({children}) {
  const [cards, setCards] = useState([])

  function addCard() {
    setCards([...cards, {
      id: Math.random().toString(),
    }])
  }

  function deleteCard(id) {
      const newCard = cards
      newCard.pop(id)
  
      setCards([...newCard])

    // setCards(cards.filter(card => card.id !== id))
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