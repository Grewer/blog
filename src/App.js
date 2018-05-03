import React, {Component} from 'react';
import './App.less'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './module/home'
import Category from './module/category'
import Header from './module/header'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({location}) => {
          return (
            <div className="App">
              <Route path="/" component={Header}/>
              <ReactCSSTransitionGroup
                transitionName="example"
                component="div"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                <Switch key={location.pathname}>
                  <Route path="/" exact key="Home" component={Home}/>
                  <Route path="/category" key="Category" component={Category}/>
                </Switch>
              </ReactCSSTransitionGroup>
              <div className="footer">尾部</div>
            </div>
          )
        }}/>
      </Router>
    );
  }
}

export default App;
