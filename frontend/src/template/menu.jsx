import React from 'react'
import If from './if'
import {CartContext} from '../context/cartContext'

export default props => (
  <div className="menu">
    <ul>
      <li>
        <a href='#/carrinho'>Carrinho <i className="fa fa-shopping-cart"></i>
          <CartContext.Consumer>
            { cart => (
                <If test={cart.amount}>
                  <span className="badge">{cart.amount}</span>
                </If>
              )
            }
          </CartContext.Consumer>
        </a>
      </li>
      <li><a href='#'>Entrar <i className="fa fa-user"></i></a></li>
    </ul>
  </div>
)
