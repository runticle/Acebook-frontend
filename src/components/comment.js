import React from 'react';
import AllCommentButtons from './comment_button/allCommentButtons';
import NewComment from './newComment'

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
        />
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
