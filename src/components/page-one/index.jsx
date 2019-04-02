import React, { Component } from 'react'
import CardComponent from '../card'
import './styles.css'

export default class PageOneComponent extends Component {
  render(){
    return(
      <CardComponent>
        <div className="pageone">
        <h1>This is for page One, when the router path is '/pageone' this should be displayed</h1>
        </div>
      </CardComponent>
    )
  }
}