import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state={} //This wont have any state or props as it is really just the container for everything
  render() {
    return (
      <Router>
        {/** This is where you would put those elements that need to be on every page. Some examples are the global header,
          tool/app bar, navigation buttons, etc. **/}
          <div className='toolbar'>
            <h2>Welcome!!</h2>
          </div>




        <Switch>
        {/** This is where your Routes will be defined. Switch basically says 'this is where the content should change' **/}
          
        </Switch>
      </Router>
    );
  }
}

export default App;
