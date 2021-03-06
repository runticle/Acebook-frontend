import React from 'react';
import config from '../../config'


class EditButton extends React.Component {

  editPostReq() {
    fetch(`${config.URL}/posts/${this.props.post_id}`, {
      method: 'patch',
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

  // handleEdit = event => {
  //   event.preventDefault();
  //   console.log(this.props.post_id)
  //
  // }

  render() {

    return (
      <div id="editButton">
        <button id="edit" onClick={ this.props.handler } className="button">✏️</button>
      </div>
          )
    }
}

export default EditButton;
