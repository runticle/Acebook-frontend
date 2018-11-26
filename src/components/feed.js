import React from 'react';
import Post from './post';

class Feed extends React.Component {
  render() {
    return (
      // loop through posts
      <div id="feed">
        < Post />
        < Post />
      </div>
    )
  }
}

export default Feed;
