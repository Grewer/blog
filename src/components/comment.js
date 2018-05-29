import React, {Component} from 'react';
import default_avatar from '../static/pic/avatar_default.png'

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
              </div>
            </li>
          )
        }
      </ul>

    </div>);
  }
}

export default Comment;
