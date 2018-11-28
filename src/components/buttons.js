import React from 'react';
import EditButton from './editButton';
import NewCommentButton from './newCommentButton';
import LikeButton from './likeButton';
import DeleteButton from './deleteButton';

export class Buttons extends React.Component {

  render() {

    return (
              <div id="buttons">
                < DeleteButton post_id ={ this.props.post_id } />
                < EditButton post_id ={ this.props.post_id } />
                < NewCommentButton post_id ={ this.props.post_id } />
                < LikeButton post_id ={ this.props.post_id } />
              </div>
          )
    }
}

export default Buttons;
