import React from 'react';
import { getAuthenticationHeaders } from '../actions/auth';

export class NewComment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comment_message: ""
    };
  }

  newCommentReq() {
    fetch(`http://localhost:3000/posts/${this.props.post_id}/comments`, {
      method: 'post',
      headers: getAuthenticationHeaders(),
      body: JSON.stringify({
        message: this.state.post_message
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result!')
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  validateForm() {
    return this.state.comment_message.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.newCommentReq();
  }

  render() {
    return (
      <div className="new_comment">
        <form className="new_message_form" onSubmit={this.handleSubmit}>
          <textarea className="comment_message" placeholder="What u thinkin" onChange={this.handleChange}/>
          <button className="submit_comment" disabled={!this.validateForm()}>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewComment;
