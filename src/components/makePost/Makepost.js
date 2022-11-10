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
          <input className="postInput" placeholder="What's on your mind?" />
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postOptions">
            <div className="option">
              <PermMedia htmlColor="tomato" className="postIcon" />
              <span className="optionText"> Photo/Video</span>
            </div>
            <div className="option">
              <Label htmlColor="blue" className="postIcon" />
              <span className="optionText"> Tag</span>
            </div>
            <div className="option">
              <Room htmlColor="green" className="postIcon" />
              <span className="optionText"> Location</span>
            </div>
            <div className="option">
              <EmojiEmotions htmlColor="gold" className="postIcon" />
              <span className="optionText"> Emojis</span>
            </div>
          </div>
          <button className="postButton">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Makepost;
