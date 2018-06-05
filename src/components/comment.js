import React, {Component} from 'react';
import default_avatar from '../static/pic/avatar_default.png'
import pureRender from "grewer-pure-render";


@pureRender
class Comment extends Component {
  render() {
    let comments = this.props.comment || []
    return (<div className="comments">
      <ul>
        {
          comments.map(i => <li key={i.id}>
              <img className="avatar" src={i.avatar || default_avatar} alt={i.name}/>
              <div className="commentBody">
                <div className="author"><span>{i.name}</span><span className="time">{i.time}</span></div>
                <div>
                  {
                    i.reply ? <span>@{i.reply.name}</span> : null
                  }
                  {i.content}
                </div>
                <div className="operate">
                  <span><span>赞同</span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-zantong"></use>
                </svg>({i.agree})</span>
                  <span> <span>反对</span>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-zantong1"></use>
                </svg>({i.disagree})</span>
                  <span className="nowrap"> 查看对话</span>
                  <span> 回复</span>
                </div>
              </div>
            </li>
          )
        }
      </ul>

    </div>);
  }
}

export default Comment;
