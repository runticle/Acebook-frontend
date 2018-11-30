import React from 'react';
import EditButton from './editButton';
import NewCommentButton from './newCommentButton';
import LikeButton from './likeButton';
import DeleteButton from './deleteButton';

class AllPostButtons extends React.Component {

  render() {

    return (
              <div id="buttons">
                < DeleteButton post_id ={ this.props.post_id } />
                < EditButton
                    post_id = { this.props.post_id }
                    handler = { this.props.handler } />
                < NewCommentButton post_id ={ this.props.post_id } />
                < LikeButton post_id ={ this.props.post_id } />
              </div>
          )
    }
}

export default AllPostButtons;
