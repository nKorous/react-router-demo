import React, { Component } from 'react';
import './styles.css'
import CardComponent from '../card/index'

export default class MainComponent extends Component {
  state={}

  render(){
    return(
      <div className='mainComponentDiv'>
        <CardComponent>
          <h1>This is the main landing component. it should appear when you first load the app and also when you are at the root route.</h1>
        </CardComponent>
      </div>
    )
  }
}