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
        <div className="App">
          <Route path="/" component={Header}/>
          <Switch>
            <ReactCSSTransitionGroup
              transitionName="example"
              component="div"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <Route path="/" key="Home" exact component={Home}/>
              <Route path="/category" key="Category" component={Category}/>
            </ReactCSSTransitionGroup>
          </Switch>
          <div className="footer">尾部</div>
        </div>
      </Router>
    );
  }
}

export default App;
