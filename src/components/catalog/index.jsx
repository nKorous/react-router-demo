import React, {Component } from 'react'
import './index.css'

import CatalogItemComponent from './index'

export default class CatalogComponent extends Component {
  constructor(props){
    super(props)

    this.props = {
      data: []
    }
  }


  render(){
    const { data } = this.props
    return(
      <>
      {
        data.map(d => <CatalogItemComponent name={d.name} price={d.price} />)
      }
      </>
    )
  }
}