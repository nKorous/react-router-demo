import React, { Component } from 'react'
import CardComponent from '../card'

export default class CatalogItemComponent extends Component {
  constructor(props){
    super(props)

    this.props = {
      name: '',
      price: 0.00
    }
  }

  render(){
    const [name, price] = this.props
    return(
      <CardComponent>
        <span>Item Name: {name}</span>
        <br/>
        <span>`Price: $${price}`</span>
      </CardComponent>
    )
  }
}