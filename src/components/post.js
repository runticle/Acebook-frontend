import React from 'react';
import Time from 'react-time-format';
import AllPostButtons from './post_buttons/allPostButtons';
import Comment from './comment';


import NewComment from './newComment'
import { connect } from 'react-redux';

import {startSetComments} from '../actions/comments'
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
        { this.renderNameTime(this.props.time, this.props.user) }
        { this.renderMessage(this.props.message) }
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
    this.props.startSetComments(this.props.id)
    this.state.commentsHidden ? this.setState({ commentsHidden: false }) : this.setState({ commentsHidden: true })
  }


  renderComments() {
    const style = this.state.commentsHidden ? {display: 'none'} : {};
    return (
      <div id="comments" style= { style }>
        { this.props.comments.map((comment, i) => (
        <li>
          < Comment
          message = { comment.comment }/>
        </li>
      ))}
        <div id="render_new_comment">{ this.renderNewComment() }</div>
      </div>
    )
  }

  renderNewComment() {
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

const mapStateToProps = (state) => {
 return {
   comments: state.comments
 }
};

const mapDispatchToProps = (dispatch) => ({
 startSetComments: (id) => dispatch(startSetComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
