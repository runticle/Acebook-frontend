import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Post from './post';
import NewPost from './newPost';
import Navigation from './navigation';
import Welcome from './welcome';

export class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCommentsOnPost: null
    };
  }

 handleForms = event => {
   document.getElementById('login_form').style.display = 'none'
 }

 handleCommentsShow = post_id => {
   let postid = post_id === this.state.showCommentsOnPost ? null : post_id
   this.setState({showCommentsOnPost: postid})
 }

 handleLoginRedirect = () => {
   this.props.history.push('/')
 }

 render() {
   document.body.style = "background-color: #e6e9ef;"
       return (
         <div id="posts_body">
         < Navigation />
         < Welcome />
           <div id="new_post_box">
             < NewPost
             handleLoginRedirect={this.handleLoginRedirect}
             />
           </div>
           <ul>
             { this.props.posts.map((post, i) => (
                   <li>
                     < Post
                        handleCommentsShow = {this.handleCommentsShow}
                        commentsVisible={post.id === this.state.showCommentsOnPost}
                        key={i}
                        id = {post.id}
                        message={post.message}
                        time={post.created_at}
                        user={post.user_id}
                       // numberComments={post.numberComments}
                     />
                   </li>
             ))}
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
