import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Post from './post';
import NewPost from './newPost';
import Navigation from './navigation';
import Welcome from './welcome';

export class Feed extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoaded: false,
  //     posts: props.posts
  //   };
  // }

  // handleChange(event) {
  //   this.setState({hidden: false});
  // }

  // componentDidMount() {
  //   fetch("http://localhost:3000/posts")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           posts: result
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  handleForms = event => {
    document.getElementById('login_form').style.display = 'none'
  }



  render() {

    // console.log(this.props.posts)
    const posts = this.props.posts.map((post, i) => (
          <li>
            < Post
              id = {post.id}
              key={i}
              message={post.message}
              time={post.created_at}
              user={post.user_id}
              // numberComments={post.numberComments}
            />
          </li>
      ))
    document.body.style = "background-color: #e6e9ef;"
        return (
          <div id="posts_body">
          < Navigation />
          < Welcome />
            <div id="new_post_box">
              < NewPost />
            </div>
          <ul>
            { posts }
          </ul>
          </div>
        )
      }
    }

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps)(Feed);
