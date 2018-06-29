import React, {Component} from 'react';
import './App.less'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './module/home'
import Category from './module/category'
import Header from './module/header'
import Footer from './module/footer'
import PhoneList from './module/header/phoneList'
import Article from './module/article'
import NotFound from "./components/404";
import {connect} from "react-redux";
import Archives from './module/archives'

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
              <Header location={location}/>
              <PhoneList key="PhoneList"/>
              <div className="body">
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
        }}/>
      </Router>
    );
  }
}

function showData(state) {
  return {
    loadingStatus: state.ArticleLoading
  }
}

export default connect(showData)(App);
