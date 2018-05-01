import React, {Component} from 'react';
import './App.less'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './module/home'
import Category from './module/category'
import Header from './module/header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/category" component={Category}/>
          </Switch>
          <div className="footer">尾部</div>
        </div>
      </Router>
    );
  }
}

export default App;
