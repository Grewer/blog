import React, {Component} from 'react';

class Comment extends Component {
  render() {
    let comments = this.props.comment || []
    return (<div className="comments">
      <ul>
        {
          comments.map(i => <li key={i.id}>
              <img src="#" alt={i.name}/>
              <span>{i.name}</span>
              <div>
                {
                  i.reply ? <span>@{i.reply.name}</span> : null
                }
                {i.content}
              </div>
            </li>
          )
        }
      </ul>

    </div>);
  }
}

export default Comment;
