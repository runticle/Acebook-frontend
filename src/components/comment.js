import React from 'react';
import AllCommentButtons from './comment_button/allCommentButtons';
import NewComment from './newComment'
import Time from 'react-time-format';


export class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div name="comment" id="comment_id">
        { this.renderNameTime() }
        { this.renderMessage() }
        < AllCommentButtons
          post_id={ this.props.post_id }
          id={this.props.id}
        />
      </div>
      )
    }

    renderNameTime() {
      return (
      <div id="name_time">
        <h4 className="user_name">User #{this.props.user}</h4>
        <p id="time"> <Time value={ this.props.time } format="hh:mm YYYY/MM/DD" /> </p>
      </div>
    )
    }

    renderMessage() {
      return (
      <div id="message">
        <p>{this.props.message}</p>
      </div>
    )
    }
}

export default Comment;
