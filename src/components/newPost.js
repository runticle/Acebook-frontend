import React from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts'

export class NewPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      post_message: ""
    };
  }

  // newPostReq() {
  //   fetch("http://localhost:3000/posts", {
  //     method: 'post',
  //     headers: getAuthenticationHeaders(),
  //     body: JSON.stringify({
  //       message: this.state.post_message
  //     })
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
  //         this.setState({
  //           error
  //         });
  //       }
  //     )
  // }

  validateForm() {
    return this.state.post_message.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.startAddPost(event.target.post_message.value)
  }

  render() {
    return (
        <form className="new_message_form" onSubmit={this.handleSubmit}>
          <textarea id="post_message" placeholder="What's on your mind...?" onChange={this.handleChange}/>
          <button id="submit_message" disabled={!this.validateForm()}>Submit</button>
        </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (price) => dispatch(startAddPost(price))
})

export default connect(undefined, mapDispatchToProps)(NewPost);
