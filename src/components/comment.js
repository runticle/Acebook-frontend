import React from 'react';
import AllCommentButtons from './comment_button/allCommentButtons';
import NewComment from './newComment'

class Comment extends React.Component {

  render() {
    return (
      <div name="comment" id="post_id">
        < NewComment
          post_id ={ this.props.post_id }
        />
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
