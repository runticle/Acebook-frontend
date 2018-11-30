import React from 'react';
import { getAuthenticationHeaders } from '../../actions/auth'
import config from '../../config'


class DeleteButton extends React.Component {

  deletePostReq() {
    fetch(`${config.URL}/posts/${this.props.post_id}`, {
      method: 'delete',
      headers: getAuthenticationHeaders()
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
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
    console.log(this.props.post_id)
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
