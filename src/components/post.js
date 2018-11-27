import React from 'react';
import Time from 'react-time-format';
import Buttons from './buttons';
import Comment from './comment';
import Feed from './feed';
// import '../bootstrap/dist/css/bootstrap.css';


class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="border" name="post" id="post_id">
        { this.renderNameTime(this.props.time, this.props.user) }
        { this.renderMessage(this.props.message) }
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
      </div>
    )
  }

  renderNameTime(time, user) {
    return (
    <div id="name_time">
      <h4 className="user_name">User number { user }!</h4>
      <p id="time"> <Time value={ time } format="hh:mm YYYY/MM/DD" /> </p>
    </div>
    )
  }

  renderMessage(message) {
    return (
    <div id="message">
      <p>{ message }</p>
    </div>
  )
  }
}

export default Post;
