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
    <div className="posting">
      <div className="postingWrapper">
        <div className="postingTop">
          <img className="postingImage" src="" alt=""/>
          <textarea className="postingInput" placeholder="What's on your mind?" ></textarea>
        </div>
        <hr className="postingHr" />
        <div className="postingBottom">
          <div className="postingOptions">
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
          <button className="postingButton">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Makepost;
