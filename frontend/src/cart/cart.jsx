import React from 'react'
import axios from 'axios'

import {CartConsumer} from '../context/cartContext'

const URL = 'http://localhost:3003/api/viaje'

export default props => {

  const renderRows = (items) => {
      return items.map(item => (
      <tr>
        <td>{item.description}</td>
        <td>R$ {item.value}</td>
        <td>Ações</td>
      </tr>
    )
  )}

  return (
    <CartConsumer>
    {
      ({
        addToCart,
        removeToCart,
        resetCart,
        items,
      }) => (
        <div className='container'>
          <h2 className='section-subtitle full-size'>Carrinho de Compras</h2>
          <table>
            <thead>
              <tr>
                <th>Pacote</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {renderRows(items)}
            </tbody>
          </table>
        </div>
      )
    }
    </CartConsumer>
  )
}
