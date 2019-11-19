import React from 'react'
import If from './if'
import {CartConsumer} from '../context/cartContext'

export default props => (
  <div className="menu">
    <ul>
      <li>
        <a href='#/carrinho'>Carrinho <i className="fa fa-shopping-cart"></i>
          <CartConsumer>
            { ({items,totalItems}) => (
                <If test={items.length}>
                  <span className="badge">{totalItems()}</span>
                </If>
              )
            }
          </CartConsumer>
        </a>
      </li>
      <li><a href='#'>Entrar <i className="fa fa-user"></i></a></li>
    </ul>
  </div>
)
