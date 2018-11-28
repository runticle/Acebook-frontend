import React from 'react';


class Buttons extends React.Component {

  deletePostReq() {
    fetch("https://acebook-stars.herokuapp.com/posts", {
      method: 'delete',
      id: this.props.post_id
    })
      .then(res => res.json())
      .then(
        (result) => {
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


  handleDelete = event => {
    event.preventDefault();
    this.deletePostReq();
  }

  handleEdit = event => {
    event.preventDefault();
    console.log(this.props.post_id)
  }

  handleComment = event => {
    event.preventDefault();
    console.log(this.props.post_id)
  }

  handleLike = event => {
    event.preventDefault();
    console.log(this.props.post_id)
  }

  handleMore = event => {
    event.preventDefault();
    console.log(this.props.post_id)
  }

  render() {

    return (
              <div id="buttons">
                <button id="delete" onClick={ this.handleDelete } className="button">❌</button>
                <button id="edit" onClick={ this.handleEdit } className="button">✏️</button>
                <button id="new_comment_button" onClick={ this.handleComment } className="button">💬</button>
                <button id="toggle_like" onClick={ this.handleLike } className="button">⭐️</button>
                <button id="see_more" onClick={ this.handleMore } className="button">➕</button>
              </div>
          )
    }
}

export default Buttons;
