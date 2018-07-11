import React, {Component} from 'react';
import styles from './App.less'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './module/home'
import Category from './module/category'
import Header from './module/header'
import Footer from './module/footer'
import PhoneList from './module/header/phoneList'
import Article from './module/article'
import NotFound from "./components/404";
import Archives from './module/archives'
import CSSModules from 'react-css-modules';

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={CSSModules(({location}) => {
          return (
            <div styleName="App">
              <Header location={location}/>
              <PhoneList key="PhoneList"/>
              <div styleName="body">
                <Switch key={location.pathname}>
                  <Route path="/" exact component={Home}/>
                  <Route path="/category" component={Category}/>
                  <Route path="/archives" component={Archives}/>
                  <Route path="/article/:id" component={Article}/>
                  <Route path="*" component={NotFound}/>
                </Switch>
              </div>
              <Footer/>
            </div>
          )
        }, styles)}/>
      </Router>
    );
  }
}


export default App;
