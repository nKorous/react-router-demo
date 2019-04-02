import React, { Component } from 'react'
import CardComponent from '../card'
import './styles.css'

export default class PageTwoComponent extends Component {
  render(){
    return(
      <CardComponent>
        <div className='pagetwo'>
        <h1>This is for page TWO, when the router path is '/pagetwo' this should be displayed</h1>
        </div>
      </CardComponent>
    )
  }
}