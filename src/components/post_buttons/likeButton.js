import React from 'react';


class LikeButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likedButtonHidden: true,
      unlikedButtonHidden: false
    };
  }
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

  handleLikeTrue = event => {
    event.preventDefault();
      document.getElementById('toggle_like_true').style.display = 'none'
      document.getElementById('toggle_like_false').style.display = 'block'
  }

  handleLikeFalse = event => {
    event.preventDefault();
      document.getElementById('toggle_like_true').style.display = 'block'
      document.getElementById('toggle_like_false').style.display = 'none'
  }

  render() {
    const style = {display: 'none'}
    return (
      <div id="likeButton">
        <button id="toggle_like_true" style = {style} onClick={ this.handleLikeTrue } className="button">🌟</button>
        <button id="toggle_like_false" onClick={ this.handleLikeFalse } className="button">⭐️</button>
      </div>
          )
    }
}

export default LikeButton;
