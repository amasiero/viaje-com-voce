import React from 'react'
import pagarme from 'pagarme'
import {CartConsumer} from '../context/cartContext'
import {withRouter} from 'react-router-dom'

export default withRouter(props => {

  const [form, setForm] = React.useState({})

  const handleOnClick = (items, amount, resetCart) => {
      setForm({
        ...form,
        items,
        amount: amount(),
        resetCart
      })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const {
      name,
      number,
      card_holder_name,
      card_number,
      card_expiration_date,
      card_cvv,
      items,
      amount,
      resetCart
    } = form

    pagarme.client.connect({ api_key: '<API_KEY>' })
      .then(client => client.transactions.create({
    	  customer: {
          external_id: '1212345679',
          name ,
          type: 'individual',
          country: 'br',
          email: 'teste@teste.com',
          documents: [{ type: 'cpf', number}],
          phone_numbers: ['+5511987654321'],
          birthday: '1994-05-05'
        },
      	amount: parseInt(amount * 100),
      	card_holder_name,
      	card_expiration_date,
      	card_number,
      	card_cvv,
      	billing: {
      		name,
      		address: {
            street: 'street one',
      			street_number: '123',
      			neighborhood: 'neighborhood',
      			city: 'city',
      			state: 'state',
      			zipcode: '09876543',
      			country: 'br'
      		}
      	},
      	items: items.map(item => (
          {
      			id: item._id,
      			title: item.name,
      			unit_price: item.value * 100,
      			quantity: item.quantity,
      			tangible: false
      		}
        )),
      	split_rules: [
    		  {
    		    recipient_id: '<ID>',
    		    percentage: 85,
    		    liable: true,
    		    charge_processing_fee: true
    		  },
    		  {
    		    recipient_id: '<ID>',
    		    percentage: 15,
    		    liable: true,
    		    charge_processing_fee: true
    		  }
      	]
      }))
      .then(resp => {
        if(resp.tid) {
          resetCart()
          props.history.push(`/confirma-compra/${resp.tid}`)
        }
      })
  }

  const handleOnChange = (event) => {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }

  return (
    <CartConsumer>
      { ({items, amount, resetCart}) => (
        <div className='container'>
          <h2 className='section-subtitle full-size'>Finalizar Pagamento</h2>
          <form className='full-size' onSubmit={handleOnSubmit}>
            <label>Nome:</label>
            <input type='text' onChange={handleOnChange} name='name' placeholder='Informe o nome' />
            <label>CPF:</label>
            <input type='text' onChange={handleOnChange} name='number' placeholder='Informe o CPF' />
            <label>Numero do Cartão:</label>
            <input type='text' onChange={handleOnChange} name='card_number' placeholder='Informe o número do cartão' />
            <label>Nome do Titular:</label>
            <input type='text' onChange={handleOnChange} name='card_holder_name' placeholder='Informe o nome do titular' />
            <label>Data de Validade:</label>
            <input type='text' onChange={handleOnChange} name='card_expiration_date' placeholder='Informe a data de validade' />
            <label>CVV:</label>
            <input type='text' onChange={handleOnChange} name='card_cvv' placeholder='Informe o código de seguranca' />
            <button className='btn btn-success btn-right' onClick={() => handleOnClick(items, amount, resetCart)}><i className='fa fa-credit-card'></i> Finalizar Cartão</button>
          </form>
        </div>
      )}
    </CartConsumer>
  )
})
