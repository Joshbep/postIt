import React from 'react'
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel
} from '@material-ui/icons'
import './makePost.css'

function Makepost() {
  return (
    <div className="post">
      <div className="wrapper">
        <div className="postTop">
          <img className="postImage" src="" alt=""/>
          <input placeholder="What's on your mind?" className="postInput"/>
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postOptions">
            <div className="option">
              <PermMedia className="postIcon" />
              <span className="optionText"> Photo/Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makepost;
