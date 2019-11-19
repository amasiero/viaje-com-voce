import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import Gallery from '../gallery/gallery'
import Cart from '../cart/cart'
import Checkout from '../cart/checkout'
import Confirmation from '../cart/confirmation'
import Travel from '../travel/travel'

export default () => (
  <HashRouter>
    <Route path='/galeria' component={Gallery} />
    <Route path='/viagem/:id' component={Travel} />
    <Route path='/carrinho' component={Cart} />
    <Route path='/finalizar-compra' component={Checkout} />
    <Route path='/confirma-compra/:id' component={Confirmation} />
    <Redirect from='*' to='/galeria' />
  </HashRouter>
)
