import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './App.css';
import MainComponent from './components/main';
import PageOneComponent from './components/page-one';
import PageTwoComponent from './components/page-two';

class App extends Component {
  state={} //This wont have any state or props as it is really just the container for everything
  render() {
    return (
      <div className="App">
      <Router>
        {/** This is where you would put those elements that need to be on every page. Some examples are the global header,
          tool/app bar, navigation buttons, etc. **/}
          <div className='toolbar'>
            <h2>Welcome!!</h2>
          </div>
          <div className="nav">
            <button component={NavLink} className='linkButton' to="/">Home</button>
            <button component={NavLink} className='linkButton' to="/pageone">Page One</button>
            <button component={NavLink} className='linkButton' to="/pagetwo">Page Two</button>
          </div>



        <div className='contentSection'>
        <Switch>
        {/** This is where your Routes will be defined. Switch basically says 'this is where the content should change' **/}
          <Route exact path="/" component={MainComponent} />
          <Route path="/pageone" component={PageOneComponent} />
          <Route path="/pagetwo" component={PageTwoComponent} />
        </Switch>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
