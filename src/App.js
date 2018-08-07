import React, {Component} from 'react';
import styles from './App.less'
import {Route, Switch} from 'react-router-dom';
import Header from './module/header'
import Footer from './module/footer'
import PhoneList from './module/header/phoneList'
import NotFound from "./components/404";
import Scroll from './module/scroll'
import AsyncComponent from './components/asyncComponent'

const Article = () => import( './module/article')
const Category = () => import('./module/category')
const Home = () => import('./module/home')
const Archives = () => import('./module/archives')


class App extends Component {
  render() {
    return (
      <Route render={({location, history}) => {
        return (
          <div className={styles.App}>
            <Header location={location}/>
            <PhoneList key="PhoneList" push={history.push} location={location}/>
            <div className={styles.body}>
              <Switch key={location.pathname}>
                <Route path="/" exact component={AsyncComponent(Home)}/>
                <Route path="/category" component={AsyncComponent(Category)}/>
                <Route path="/archives" component={AsyncComponent(Archives)}/>
                <Route path="/article/:id" component={AsyncComponent(Article)}/>
                <Route path="*" component={NotFound}/>
              </Switch>
            </div>
            <Scroll/>
            <Footer/>
          </div>
        )
      }}/>
    );
  }
}

// todo 添加一个监听缩放事件  缩放时控制头部列表的显示隐藏


export default App;
