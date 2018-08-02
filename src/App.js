import React, {Component} from 'react';
import styles from './App.less'
import { Route, Switch} from 'react-router-dom';
import Home from './module/home'
import Category from './module/category'
import Header from './module/header'
import Footer from './module/footer'
import PhoneList from './module/header/phoneList'
import Article from './module/article'
import NotFound from "./components/404";
import Archives from './module/archives'
import CSSModules from 'react-css-modules';
import Scroll from './module/scroll'

class App extends Component {
  render() {
    return (
        <Route render={CSSModules(({location,history}) => {
          return (
            <div styleName="App">
              <Header location={location}/>
              <PhoneList key="PhoneList" push={history.push} location={location} />
              <div styleName="body">
                <Switch key={location.pathname}>
                  <Route path="/" exact component={Home}/>
                  <Route path="/category" component={Category}/>
                  <Route path="/archives" component={Archives}/>
                  <Route path="/article/:id" component={Article}/>
                  <Route path="*" component={NotFound}/>
                </Switch>
              </div>
              <Scroll/>
              <Footer/>
            </div>
          )
        }, styles)}/>
    );
  }
}
// todo 添加一个监听缩放事件  缩放时控制头部列表的显示隐藏


export default App;
