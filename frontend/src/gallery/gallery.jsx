import React from 'react'
import axios from 'axios'

import CardContainer from '../template/cardContainer'

const URL = 'http://localhost:3003/api/viaje'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
    this.loadTravels()
  }

  loadTravels() {
    axios.get(`${URL}`)
      .then(res => this.setState({...this.state, list: res.data}))
  }

  render() {
    return (
      <CardContainer title={'Viagens com Natureza'} list={this.state.list} />
    )
  }
}

export default Gallery
