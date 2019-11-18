import React from 'react'
import axios from 'axios'

import CardContainer from '../template/cardContainer'
// import {CartContext} from '../context/cardContext'

const URL = 'http://localhost:3003/api/viaje'

export default class Gallery extends React.Component {

  constructor(props) {
    super(props)
    this.state = { list: [] }
    this.loadTravels()
    this.handleAddCart = this.handleAddCart.bind(this)
  }

  loadTravels() {
    axios.get(`${URL}`)
      .then(res => this.setState({...this.state, list: res.data}))
  }

  handleAddCart(travel) {
    console.log(travel)
  }

  render() {
    return (
      <CardContainer title={'Viagens com Natureza'} list={this.state.list} handleAddCart={this.handleAddCart}/>
    )
  }
}
