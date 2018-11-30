import React from 'react';
import Time from 'react-time-format';
import AllPostButtons from './post_buttons/allPostButtons';
import Comment from './comment';
import Feed from './feed';
import ReactDOM from 'react-dom'
import NewComment from './newComment'
import EditPostForm from './editPostForm'
// import '../bootstrap/dist/css/bootstrap.css';


export class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentsHidden: true,
      editPostFormHidden: true,
      isLoaded: false,
      comments: []
    };
    this.handler = this.handler.bind(this)
  }

  handler(event) {
    event.preventDefault();
    if (this.state.editPostFormHidden) {
      this.setState({
        editPostFormHidden: false })
      } else {
      this.setState({
        editPostFormHidden: true })
      }
  }

    fetchComments() {
      fetch(`http://localhost:3000/posts/${this.props.id}/comments`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              comments: result
            });console.log(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

  render() {
    return (
      <div className="border" name="post" id="post_id">
        { this.renderNameTime(this.props.time, this.props.user) }
        { this.renderMessage(this.props.message) }
        < EditPostForm
          post_id = { this.props.id }
          message = { this.props.message }
          editPostFormHidden = {this.state.editPostFormHidden} />
        < AllPostButtons
          post_id = { this.props.id }
          handler = { this.handler }
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
    if (this.state.commentsHidden) {
      this.fetchComments()
      console.log(this.state.comments)
      this.setState({ commentsHidden: false })
    } else {this.setState({ commentsHidden: true })}
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

  renderNameTime(time, user) {
    return (
    <div id="name_time">
      <h4 className="user_name">User #{ user }!</h4>
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
