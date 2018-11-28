import React from 'react';


class DeleteButton extends React.Component {

  // deletePostReq() {
  //   fetch("https://acebook-stars.herokuapp.com/posts", {
  //     method: 'delete',
  //     id: this.props.post_id
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         console.log(error)
  //         this.setState({
  //           error
  //         });
  //       }
  //     )
  // }

  handleDelete = event => {
    event.preventDefault();
    console.log(this.props.post_id)
    // this.deletePostReq();
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
