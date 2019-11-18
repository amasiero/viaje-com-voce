import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:3003/api/viaje'

export default props => {

  const [travel, setTravel] = React.useState({})

  React.useEffect(() => {
    const fetchData =  () => {
      axios.get(`${URL}/${props.match.params.id}`)
        .then(result => setTravel(result.data))
    }
    fetchData()
  })

  return (
    <div className='container'>
      <h1 className='details-name full-size'>{travel.name}</h1>
      <img className='details-img full-size center' src={travel.image} />
      <div className='details-description quarter-up'>
        <h3 className='details-description-title'>Descrição do Pacote</h3>
        <p className='details-description-content'>{travel.description}</p>
      </div>
      <div className='details-values quarter-down center'>
        <h2 className='details-values-price'>R$ {travel.value}</h2>
        <button className='btn btn-alert product-btn'>
          <i className='fa fa-cart-plus'></i> Adicionar
        </button>
      </div>
    </div>
  )
}
