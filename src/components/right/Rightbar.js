import './rightBar.css';
import { useContext, useEffect, useState } from "react";
import Tofollow from '../toFollow/Tofollow.js'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);



  return (
    <div className="right">
      <div className="rightWrapper">
          <h4 className="rightbarTitle">Friends</h4>
      <div className="rightbarFollowings">
        {friends.map((friend) => (
          <Link
            to={"/profile/" + friend.username}
            style={{ textDecoration: "none" }}
          >
          <div className="rightbarFollowing">
            <img
              src={
                friend.profilePicture
                ? PF + friend.profilePicture
                : PF + "profile/avatar.png"
              }
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{friend.username}</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
  </div>
  );
}

export default Rightbar;
