import React from 'react';
import styles from './index.less'
import CSSModules from 'react-css-modules'

let trigger = false

@CSSModules(styles)
class Scroll extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  scroll = () => {
    if (trigger) return;
    let curTop = document.documentElement.scrollTop || document.body.scrollTop,each = curTop / 2000
    let timer = setInterval(function () {
      trigger = true
      curTop -= each
      each += 5
      if (curTop <= 0) {
        clearInterval(timer)
        trigger = false
      }
      window.scrollTo(0, curTop)
    }, 30)
  }


  render() {
    return (<svg onClick={this.scroll} style={{display: this.state.isShow ? 'block' : 'none'}} styleName="scrollToTop"
                 className="icon ft-30" aria-hidden="true">
      <use xlinkHref="#icon-xiangshang"></use>
    </svg>);
  }

  componentDidMount() {
    let async = null, docHeight = document.documentElement.clientHeight, scrollTop = ''
    window.onscroll = e => {
      clearTimeout(async)
      async = setTimeout(() => {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        this.setState({isShow: scrollTop > docHeight})
      }, 100)
    }
  }
}

export default Scroll;
