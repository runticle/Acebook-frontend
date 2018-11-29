import React from 'react';

export class EditPostForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      updated_message: ""
    };
  }

  editPostReq() {
    fetch(`https://acebook-stars.herokuapp.com/posts/${this.props.post_id}`, {
      method: 'patch',
      message: this.state.updated_message,
      // user_id: // USER ID FROM TOKEN!!!!! WOOO!
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result!')
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  validateForm() {
    return this.state.updated_message.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.editPostReq();
  }

  render() {
    return (
      <div className="new_comment">
        <form className="edit_message_form" onSubmit={this.handleSubmit}>
          <textarea className="updated_message" onChange={this.handleChange} type = "text" value= {this.props.message}>  </textarea>
          <button className="submit_message" disabled={!this.validateForm()}>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditPostForm;
