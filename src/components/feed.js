import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post';
import NewPost from './newPost';
import Navigation from './navigation';
import Welcome from './welcome';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: []
    };
  }

  handleChange(event) {
    this.setState({hidden: false});
  }

  componentDidMount() {
    fetch("https://acebook-stars.herokuapp.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleForms = event => {
    document.getElementById('login_form').style.display = 'none'
  }

  render() {
    document.body.style = "background-color: #e6e9ef;"
    const { error, isLoaded, posts } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div id="posts_body">
          < Navigation />
          < Welcome />
          <div id="new_post_box">
            <NewPost />
          </div>
          <ul>
          { this.state.posts.map((post, i) => (
            < Post
              id = {post.id}
              key={i}
              message={post.message}
              time={post.created_at}
              user={post.user_id}
              numberComments={post.numberComments}
            />
          ))}
          </ul>
          </div>
        )
      }
  }
}

export default Feed;
