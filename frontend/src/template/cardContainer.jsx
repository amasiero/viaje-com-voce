import React from 'react'
import ReactCreateClass from 'create-react-class'
import Card from './card'
import Flickity from 'react-flickity-component'

export default props => {

      const list = props.list || []
      const flickityOptions = {
        groupCells: true,
        selectedAttraction: 0.01,
        friction: 0.15
      }

      return (
        <div className='container'>
          <h2 className='section-subtitle full-size'>{props.title}</h2>,
          <Flickity className={'gallery'}
                options={flickityOptions}>
              {list.map((l, index) => (
                  <Card key={index} id={l._id} name={l.name} value={l.value} image={l.image} onClick={props.handleAddCart(l)}/>
              ))}
          </Flickity>
        </div>
      )
}
