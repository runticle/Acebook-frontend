import React from 'react';
import { getAuthenticationHeaders } from '../actions/auth';
export class EditPostForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      updated_message: this.props.message,
    };
  }

  editPostReq() {
    fetch(`${URL}/posts/${this.props.post_id}`, {
      method: 'patch',
      headers: getAuthenticationHeaders(),
      body: JSON.stringify({
        message: this.state.updated_message
      })
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

  // getInitialState() {
  //   return {
  //     updated_message: this.props.message
  //   }
  // }

  handleChange = event => {
    this.setState({
      updated_message: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("test")
    this.editPostReq();
  }

  render() {
    const style = this.props.editPostFormHidden ? {display: 'none'} : {};
    return (
      <div className="new_comment" style = {style}>
        <form className="edit_message_form" onSubmit={this.handleSubmit}>
          <textarea id="update_message_text" className="updated_message" onChange={this.handleChange} type="textarea" value={this.state.updated_message}>  </textarea>
          <button className="submit_message" disabled={!this.validateForm()}>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditPostForm;
