import React from 'react';

class NewPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      post_message: ""
    };
  }

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
    //send message to backend
  }

  render() {
    return (
      <div className="new_message">
        <form className="new_message_form" onSubmit={this.handleSubmit}>
          <textarea id="post_message" placeholder="What's on your mind...?" onChange={this.handleChange}/>
          <button id="submit_message" disabled={!this.validateForm()}>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewPost;
