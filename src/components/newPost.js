import React from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts'

export class NewPost extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.startAddPost(event.target.post_message.value).then(res => {
      console.log('res', res)
      if (res === 401) this.props.handleLoginRedirect()
    })
    event.target.post_message.value = ""
  }

  render() {
    return (
      <form className="new_message_form" onSubmit={this.handleSubmit}>
        <textarea id="post_message" placeholder="What's on your mind...?" onChange={this.handleChange}/>
        <button id="submit_message">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(NewPost);
