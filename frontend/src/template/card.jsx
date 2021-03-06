import React from 'react'
import {CartConsumer} from '../context/cartContext'

export default props => (
  <CartConsumer>
    { ({addToCart}) => (
      <div className='gallery-cell'>
        <img className='product-img' src={props.image} />
        <h3 className='product product-name'>{props.name}</h3>
        <h4 className='product product-value'>{`R$ ${props.value.toFixed(2)}`}</h4>
        <p className='product product-info' >
          <a href={`#/viagem/${props.id}`}>
            <i className='fa fa-plus'></i> Mais informações
          </a>
        </p>
        <button className='btn btn-alert product-btn' onClick={() => {addToCart(props.object)}}>
          <i className='fa fa-cart-plus'></i> Adicionar
        </button>
      </div>
    )}
</CartConsumer>
)
