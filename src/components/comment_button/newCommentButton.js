import React from 'react';

class NewCommentButton extends React.Component {

  newCommentPostReq() {
    fetch("https://acebook-stars.herokuapp.com/posts/post_id/comments", {
      method: 'post',
      comment: 'TO_BE_FILLED_IN_WHEN_API_SET_UP',
      id: this.props.post_id
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
          this.setState({
            error
          });
        }
      )
  }

  handleNewComment = event => {
    event.preventDefault();
    console.log(this.props.post_id)
  }

  render() {

    return (
      <div id="newCommentButton">
        <button id="new_comment_button" onClick={ this.handleNewComment } className="button">💬</button>
      </div>
          )
    }
}

export default NewCommentButton;
