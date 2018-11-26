import React from 'react';
import Buttons from './buttons';
// import '../bootstrap/dist/css/bootstrap.css';


class Post extends React.Component {
  render() {
    return (
      <div className="border" name="post" id="post_id">
        { this.renderNameTime() }
        { this.renderMessage() }
        < Buttons />
      </div>

    )
  }

  renderNameTime() {
    return (
    <div className="border" id="name_time">
      <h4 className="user_name">Imo</h4>
      <p id="time">Time oclock</p>
    </div>
  )
  }

  renderMessage() {
    return (
    <div className="border" id="message">
      <p>Imo message</p>
    </div>
  )
  }
}

export default Post;
