import React, {Component} from 'react';
import './App.less'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './module/home'
import Category from './module/category'
import Header from './module/header'
import Footer from './module/footer'
import PhoneList from './module/header/phoneList'
import Article from './components/article'
import NotFound from "./components/404";
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
              <PhoneList  key="PhoneList" />
                <Switch key={location.pathname}>
                  <Route path="/" exact component={Home}/>
                  <Route path="/category" component={Category}/>
                  <Route path="/article/:id" component={Article}/>
                  <Route path="*" component={NotFound}/>
                </Switch>
              <Footer />
            </div>
          )
        }}/>
      </Router>
    );
  }
}


export default App
