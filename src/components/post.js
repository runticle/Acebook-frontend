import React from 'react';
// import '../bootstrap/dist/css/bootstrap.css';


class Post extends React.Component {
  render() {
    return (
      <div className="border" name="post" id="post_id">
        <div className="border" id="name_time">
          <h4 className="user_name">Imo</h4>
          <p id="time">Time oclock</p>
        </div>
        <div className="border" id="message">
          <p>Imo message</p>
        </div>
        <div id="buttons">
          <div className="button">✏️</div>
          <div className="button">❌</div>
          <div className="button">⭐️</div>
          <div className="button">💬</div>
          <div className="button">➕</div>
        </div>
      </div>

    )
  }
}

export default Post;
