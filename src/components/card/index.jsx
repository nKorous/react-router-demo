import React, { Component } from 'react'
import './styles.css'

export default class CardComponent extends Component {

  render(){
    const { children } = this.props
    return(
      <div className="card">
      {children}
      </div>
    )
  }
}