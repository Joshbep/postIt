import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
} from '@material-ui/icons'
import './makePost.css'
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Makepost() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const description = useRef();
  const [file, setFile] = useState(null);

  const submitHandle = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };


  return (
    <div className="posting">
      <div className="postingWrapper">
        <div className="postingTop">
          <img className="postingImage" src={user.profilePicture ? PF+user.profilePicture : PF+"profile/avatar.png"} alt=""/>
          <textarea
            className="postingInput"
            placeholder={"What's on your mind "+user.username+"?"}
            ref={description}
          >
          </textarea>
        </div>
        <hr className="postingHr" />
        <form className="postingBottom" onSubmit={submitHandle}>
          <div className="postingOptions">
            <label htmlFor="file" className="option">
              <PermMedia htmlColor="tomato" className="postIcon" />
              <span className="optionText"> Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="postingButton" type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default Makepost;
