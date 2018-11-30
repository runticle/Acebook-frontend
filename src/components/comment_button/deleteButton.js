import React from 'react';
import config from '../../config'
import { getAuthenticationHeaders } from '../../actions/auth'


export class DeleteButton extends React.Component {

  deletePostReq() {
    var id = this.props.id
    var post_id = this.props.post_id
    console.log(`${config.URL}/posts/${post_id}/comments/${id}`)
    fetch(`${config.URL}/posts/${post_id}/comments/${id}`, {
      method: 'delete',
      headers: getAuthenticationHeaders()
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

  handleDelete = event => {
    event.preventDefault();
    this.deletePostReq();
  }

  render() {

    return (
      <div id="deleteButton">
        <button id="delete" onClick={ this.handleDelete } className="button">❌</button>
      </div>
          )
    }
}

export default DeleteButton;
