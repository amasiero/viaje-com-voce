import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import Gallery from '../gallery/gallery'
import Cart from '../cart/cart'
import Travel from '../travel/travel'

export default props => {
// console.log(props)
const {addCart, removeCart, cartAmount, cartList} = props
// console.log(addCart)
return(
  <HashRouter>
    <Route path='/galeria' render={(props) => <Gallery {...props} />} />
    <Route path='/viagem/:id' component={Travel} />
    <Route path='/carrinho/:id' render={(props) => <Cart {...props} addCart={addCart} />} />
    <Redirect from='*' to='/galeria' />
  </HashRouter>
)
}
