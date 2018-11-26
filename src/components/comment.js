import React from 'react';
import Buttons from './buttons';

class Comment extends React.Component {

  render() {
    return (
      <div name="comment" id="post_id">
        { this.renderNameTime() }
        { this.renderMessage() }
        < Buttons />
      </div>
      )
    }

    renderNameTime() {
      return (
      <div id="name_time">
        <h4 className="user_name">Imo</h4>
        <p id="time">Time oclock</p>
      </div>
    )
    }

    renderMessage() {
      return (
      <div id="message">
        <p>Imo comment</p>
      </div>
    )
    }
}

export default Comment;
