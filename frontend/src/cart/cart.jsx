import React from 'react'
import axios from 'axios'

// import {CartContext} from '../context/cardContext'

const URL = 'http://localhost:3003/api/viaje'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container'>
        <h2 className='section-subtitle full-size'>Carrinho de Compras</h2>
      </div>
    )
  }
}
