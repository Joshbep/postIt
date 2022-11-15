import './toFollow.css';
import React from 'react'

function Tofollow({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
      <li className="toFollowFriendList">
        <div className="toFollowFriendListImgContainer">
          <img className="toFollowFriendListImg" src={PF+user.profilePicture} alt=""/>
        </div>
        <span className="toFollowFriendUsername">{user.username}</span>
      </li>
  );
}

export default Tofollow;
