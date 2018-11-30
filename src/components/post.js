import React from 'react';
import Time from 'react-time-format';
import AllPostButtons from './post_buttons/allPostButtons';
import Comment from './comment';
import NewComment from './newComment'
import { connect } from 'react-redux';
import {startSetComments} from '../actions/comments'
import EditPostForm from './editPostForm'


export class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editFormHidden: true,
      isLoaded: false,
      comments: []
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
  }

  handleComments = event => {
    event.preventDefault();
    this.props.handleCommentsShow(this.props.id)
    this.props.startSetComments(this.props.id)
  }

  renderComments() {
    const style = this.props.commentsVisible ? {} : {display: 'none'};
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
