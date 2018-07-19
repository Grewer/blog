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
// todo 添加一个监听滚动事件和缩放事件  滚动至下部时,可以有一个到顶端的按钮  缩放时控制头部列表的显示隐藏


export default App;
