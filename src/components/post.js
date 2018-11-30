import React from 'react';
import Time from 'react-time-format';
import AllPostButtons from './post_buttons/allPostButtons';
import Comment from './comment';
import Feed from './feed';
import ReactDOM from 'react-dom'
import NewComment from './newComment'
// import '../bootstrap/dist/css/bootstrap.css';


export class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentsHidden: true
    };
  }

  render() {
    return (
      <div className="border" name="post" id="post_id">
        <div id="name_time">
          <h4 className="user_name">User #{ this.props.user }!</h4>
          <p id="time"> <Time value={ this.props.time } format="hh:mm YYYY/MM/DD" /> </p>
        </div>
        <div id="message">
          <p>{ this.props.message }</p>
        </div>
        < AllPostButtons
          post_id = { this.props.id }
        />
        <a id="see_comments" href='/posts' onClick={this.handleComments}>{this.props.numberComments} Comments</a>
        <div id="render_comments">{ this.renderComments() }</div>
      </div>
    )
  }

  handleNewComment = event => {
    event.preventDefault();
    this.state.newCommentHidden ? this.setState({ newCommentHidden: false }) : this.setState({ newCommentHidden: true })
  }

  handleComments = event => {
    event.preventDefault();
    this.state.commentsHidden ? this.setState({ commentsHidden: false }) : this.setState({ commentsHidden: true })
  }


  renderComments() {
    const style = this.state.commentsHidden ? {display: 'none'} : {};
    return (
      // loops through comments and render
      <div id="comments" style={ style }>
        <div name="comment">
          < Comment
            post_id = { this.props.id }
          />
        </div>
        <div id="render_new_comment">{ this.renderNewComment() }</div>
      </div>
    )
  }

  renderNewComment() {
    const style = this.props.newCommentHidden ? {display: 'none'} : {};
    return (
      < NewComment
        post_id ={ this.props.post_id }
      />
    )
  }
}

export default Post;
