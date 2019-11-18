import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/flickity/css/flickity.css'
import '../template/main.style.css'

import React from 'react'
import Header from '../template/header'
import Footer from '../template/footer'
import Router from './routes'
import {CartProvider} from '../context/cartContext'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CartProvider>
        <React.Fragment>
          <Header />
          <Router />
          <Footer />
        </React.Fragment>
      </CartProvider>
    )
  }
}

export default App
