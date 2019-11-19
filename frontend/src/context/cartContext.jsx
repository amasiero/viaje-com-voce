import React from 'react'

const CartContext = React.createContext({})

const CartProvider = ({
  children,
}) => {
  const [items, setItems] = React.useState([])

  const findItem = id => item => (item._id === id)

  const addToCart = item => {
    const newItem = items.find(findItem(item._id))
    if(newItem) {
      return setItems(items.map(i => {
        if(newItem._id === i._id) {
          return  {
            ...i,
            quantity: i.quantity + 1
          }
        }
        return i
      }))
    }
    return setItems([
      ...items,
      {
        ...item,
        quantity: 1,
      },
    ])
  }

  const decreaseToCart = item => {
    const delItem = items.find(findItem(item._id))
    if(delItem.quantity && delItem.quantity > 1) {
      return setItems(items.map(i => {
        if(delItem._id === i._id) {
          return  {
            ...i,
            quantity: i.quantity - 1
          }
        }
        return i
      }))
    }
    if(delItem.quantity === 1) {
     return this.removeToCart(delItem)
    }
  }

  const removeToCart = item =>
    setItems(items.filter(i => i._id !== item._id))

  const totalItems = () =>
    items.reduce((current, previous) => current + previous.quantity, 0)

  const amount = () =>
    items.reduce((current, previous) => current + (previous.quantity * previous.value), 0)

  const resetCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{
      amount,
      addToCart,
      decreaseToCart,
      removeToCart,
      resetCart,
      totalItems,
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
