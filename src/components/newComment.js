import React from 'react';
import { connect } from 'react-redux';
import { startAddComment } from '../actions/comments'
import {startSetComments} from '../actions/comments'

export class NewComment extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleNewComment({post_id: this.props.post_id, comment: event.target.comment_message.value})
    event.target.comment_message.value = ""
  }

  render() {
    return (
      <div className="new_comment">
        <form className="new_message_form" onSubmit={this.handleSubmit}>
          <textarea id="comment_message" className="comment_message" placeholder="What u thinkin" onChange={this.handleChange}/>
          <button className="submit_comment">Submit</button>
        </form>
      </div>
    )
  }
}


export default NewComment;
