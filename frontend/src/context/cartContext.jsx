import React from 'react'

const CartContext = React.createContext({})

const CartProvider = ({
  children,
}) => {
  const [items, setItems] = React.useState([])

  const addToCart = item => {
    setItems([
      ...items,
      item,
    ])
  }

  const removeToCart = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const resetCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{
      addToCart,
      removeToCart,
      resetCart,
      items,
    }}>
      { children }
    </CartContext.Provider>
  )
}

const CartConsumer = CartContext.Consumer

export {
  CartConsumer,
  CartProvider,
}

export default CartContext
