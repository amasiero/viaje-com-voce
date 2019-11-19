import React from 'react'
import {withRouter} from 'react-router-dom'
import {CartConsumer} from '../context/cartContext'

export default withRouter(props => {

  const navToCheckout = () => props.history.push('/finalizar-compra')

  const renderRows = (items, addToCart, decreaseToCart, removeToCart) => {
      return items.map(item => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td className='td-center'>
          {item.quantity}
          <button className='btn btn-default btn-small btn-action-quantity' onClick={() => addToCart(item)}>
            <i className='fa fa-plus'></i>
          </button>
          <button className='btn btn-default btn-small btn-action-quantity' onClick={() => decreaseToCart(item)}>
            <i className='fa fa-minus'></i>
          </button>
        </td>
        <td className='td-center'>R$ {item.value.toFixed(2)}</td>
        <td className='td-center'>R$ {(item.value * item.quantity).toFixed(2)}</td>
        <td className='td-center'><button className='btn btn-alert' onClick={() => removeToCart(item)}>
          <i className='fa fa-trash'></i>
        </button></td>
      </tr>
    )
  )}

  return (
    <CartConsumer>
    {
      ({
        amount,
        addToCart,
        decreaseToCart,
        removeToCart,
        resetCart,
        items,
      }) => (
        <div className='container'>
          <h2 className='section-subtitle full-size'>Carrinho de Compras</h2>
          <table className='table full-size'>
            <thead>
              <tr className='td-center'>
                <th className='tablePackage'>Pacote</th>
                <th className='tableValue'>Quantidade</th>
                <th className='tableValue'>Valor Unitário</th>
                <th className='tableValue'>Valor Total</th>
                <th className='tableActions'>Ações</th>
              </tr>
            </thead>
            <tbody>
              {renderRows(items, addToCart, decreaseToCart, removeToCart)}
            </tbody>
          </table>
          <p className='amount full-size'>Valor Total: R$ {amount().toFixed(2)}</p>
          <button className='btn btn-success btn-right full-size' onClick={navToCheckout}>Finalizar</button>
        </div>
      )
    }
    </CartConsumer>
  )
})
