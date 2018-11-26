import React from 'react';
import Buttons from './buttons';
import Comment from './comment';
// import '../bootstrap/dist/css/bootstrap.css';


class Post extends React.Component {
  render() {
    return (
      <div className="border" name="post" id="post_id">
        { this.renderNameTime() }
        { this.renderMessage() }
        < Buttons />
        { this.renderComments() }
      </div>

    )
  }

  renderComments() {
    return (
      // loops through comments and render
      <div id="comments">
        <div name="comment">
          < Comment />
        </div>
        <div name="comment">
          < Comment />
        </div>
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
      <p>Imo message</p>
    </div>
  )
  }
}

export default Post;
