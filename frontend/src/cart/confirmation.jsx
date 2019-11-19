import React from 'react'
import pagarme from 'pagarme'

export default props => {

  const [transaction, setTransaction] = React.useState({})

  React.useEffect(() => {
    pagarme.client.connect({ api_key: '<API_KEY>' })
      .then(client => client.transactions.find({ id: props.match.params.id }))
      .then(resp => setTransaction(resp))
  }, [])
  return (
    <div className='container'>
      <h2 className='section-subtitle full-size'>Confirmação de Compra</h2>
      <h2 className='section-subtitle quarter-up'>Itens Comprados</h2>
      <table className='table full-size'>
        <thead>
          <tr className='td-center'>
            <th className='tablePackage'>Produto</th>
            <th className='tableValue'>Quantidade</th>
            <th className='tableActions'>Valor Unitário</th>
          </tr>
        </thead>
        <tbody>
          {transaction.items && transaction.items.map(item => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td className='td-center'>{item.quantity}</td>
              <td className='td-center'>R$ {(item.unit_price/100).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-info full-size'>Total da compra é: R$ {(transaction.amount/100).toFixed(2)}</p>
      {transaction.split_rules && transaction.split_rules.map((recipient, index) =>(
        <p key={recipient.recipient_id} className='text-info full-size'>Valor do Recebedor {index + 1}: R$ {(
            (transaction.amount/100) *
            (recipient.percentage/100))
            .toFixed(2)}</p>
      ))}
      <a href='/' className='btn btn-default btn-a full-size'><i className='fa fa-home'></i> Voltar para Home</a>
    </div>
  )
}
