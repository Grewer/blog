import React, {Component} from 'react';
import './App.less'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './module/home'
import Category from './module/category'
import Header from './module/header'
import Footer from './module/footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PhoneList from './module/header/phoneList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
  }
  show = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow
    }))
  }
  render() {
    return (
      <Router>
        <Route render={({location}) => {
          return (
            <div className="App">
              <Route path="/" component={Header} />
              <PhoneList></PhoneList>
              <ReactCSSTransitionGroup
                transitionName="example"
                component="div"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <Switch key={location.pathname}>
                  <Route path="/" exact component={Home}/>
                  <Route path="/category" component={Category}/>
                </Switch>
              </ReactCSSTransitionGroup>
              <Footer />
            </div>
          )
        }}/>
      </Router>
    );
  }
}


export default App
