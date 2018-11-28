import React from 'react';


class LikeButton extends React.Component {
  //
  // likePostReq() {
  //   fetch("https://acebook-stars.herokuapp.com/posts", {
  //     method: 'post',
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

  handleLike = event => {
    event.preventDefault();
    console.log(this.props.post_id)
  }

  render() {

    return (
      <div id="likeButton">
        <button id="toggle_like" onClick={ this.handleLike } className="button">⭐️</button>
      </div>
          )
    }
}

export default LikeButton;
