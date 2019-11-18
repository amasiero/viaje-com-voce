import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/flickity/css/flickity.css'
import '../template/main.style.css'

import React from 'react'
import Header from '../template/header'
import Footer from '../template/footer'
import Router from './routes'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
