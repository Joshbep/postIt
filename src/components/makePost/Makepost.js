import React from 'react'
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel
} from '@material-ui/icons'
import './makePost.css'
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Makepost() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  return (
    <div className="posting">
      <div className="postingWrapper">
        <div className="postingTop">
          <img className="postingImage" src={user.profilePicture ? PF+user.profilePicture : PF+"profile/avatar.png"} alt=""/>
          <textarea
            className="postingInput"
            placeholder={"What's on your mind "+user.username+"?"}
          >
          </textarea>
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
