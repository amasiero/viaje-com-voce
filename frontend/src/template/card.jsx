import React from 'react'

export default props => (
  <div className='gallery-cell'>
    <img className='product-img' src={props.image} />
    <h3 className='product product-name'>{props.name}</h3>
    <h4 className='product product-value'>{`R$ ${props.value}`}</h4>
    <p className='product product-info' >
      <a href={`#/viagem/${props.id}`}>
        <i className='fa fa-plus'></i> Mais informações
      </a>
    </p>
    <button className='btn btn-alert product-btn' onClick={props.onClick}>
      <i className='fa fa-cart-plus'></i> Adicionar
    </button>
  </div>
)
