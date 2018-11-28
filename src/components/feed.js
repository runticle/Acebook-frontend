import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post';
import Navigation from './navigation';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
      hidden: true
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

  render() {
    document.body.style = "background-color: #e6e9ef;"
    const { error, isLoaded, posts } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        const style = this.state.hidden ? {display: ''} : {};
        return (
          <div id="posts_body">
          < Navigation />
          <ul style={style}>
          { this.state.posts.map((post, i) => (
            < Post
              key={i}
              message={post.message}
              time={post.created_at}
              user={post.user_id}
              comments={post.comments}
            />
          ))}
          </ul>
          </div>
        )
      }
  }

}

export default Feed;
