import React, {Component} from 'react';
import CSSModules from "react-css-modules";
import Comment from '../../components/comment'
import styles from './index.less'
import ToMessage from "../../components/toMessage";

@CSSModules(styles)
class ArticleBody extends Component {
  render() {
    const result = this.props.data
    return (
      <div styleName="aPage">
        <p>{result.title}</p>
        <div styleName="content">
          {result.content}
        </div>
        {
          result.time ? (<span title="发布时间"><svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-shijian"></use>
                  </svg>
            {result.time}</span>) : null
        }
        <div styleName="category">
          {
            result.label.map((i, index) => {
              return <span key={index}>{i}</span>
            })
          }
        </div>
        <div styleName="post_next_prev">
          <div>上一篇: <span>{result.prev.name}</span></div>
          <div>下一篇: <span>{result.next.name}</span></div>
        </div>
        <Comment comment={result.comments}/>
        <ToMessage />
      </div>
    )

  }
}

export default ArticleBody;
