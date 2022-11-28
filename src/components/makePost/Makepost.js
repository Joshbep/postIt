import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
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
          <input
            className="postingInput"
            placeholder={"What's happening "+user.username+"?"}
            ref={description}
          >
          </input>
        </div>
        <hr className="postingHr" />
        {file && (
          <div className="postImgContainer">
            <img className="postImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="postCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="postingBottom" onSubmit={submitHandle}>
          <div className="postingOptions">
            <label htmlFor="file">
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="option">
              <EmojiEmotions htmlColor="#1C9BEF" className="postIcon" />
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
