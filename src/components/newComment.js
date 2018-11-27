import React from 'react';

class NewComment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comment_message: ""
    };
  }

  validateForm() {
    return this.state.comment_message.length > 0
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
          <textarea id="comment_message" placeholder="What u thinkin" onChange={this.handleChange}/>
          <button id="submit_message" disabled={!this.validateForm()}>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewComment;
