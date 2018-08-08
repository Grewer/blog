import React, {Component} from 'react';
import styles from './App.less'
import {Route, Switch} from 'react-router-dom';
import Header from './module/header'
import Footer from './module/footer'
import PhoneList from './module/header/phoneList'
import NotFound from "./components/404";
import Scroll from './module/scroll'
// import AsyncComponent from './components/asyncComponent'
import Loadable from 'react-loadable'

// import Home from './module/home'
// import Category from './module/category'
// import Article from './module/article'
// import Archives from './module/archives'

import LoadingComponent from './components/loadingComponent'

const loading = (props) => {
  // console.log(props);
  // if (props.error) {
  //   return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  // } else if (props.timedOut) {
  // return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  // } else if (props.pastDelay) {
  return <LoadingComponent/>
  // } else {
  //   return null;
  // }
}

const Article = Loadable({loader: () => import( './module/article'), loading, timeout: 10000})
const Category = Loadable({loader: () => import( './module/category'), loading, timeout: 10000})
const Home = Loadable({loader: () => import( './module/home'), loading, timeout: 10000})
const Archives = Loadable({loader: () => import( './module/archives'), loading, timeout: 10000})

// const Archives = AsyncComponent(() => import( './module/archives'))




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
      }}/>
    );
  }
}

// todo 添加一个监听缩放事件  缩放时控制头部列表的显示隐藏


export default App;
