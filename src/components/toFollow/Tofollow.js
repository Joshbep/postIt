import './toFollow.css';
import React from 'react'

function Tofollow({user}) {
  return (
      <li className="toFollowFriendList">
        <div className="toFollowFriendListImgContainer">
          <img className="toFollowFriendListImg" src={user.profilePicture} alt=""/>
        </div>
        <span className="toFollowFriendUsername">{user.username}</span>
      </li>
  );
}

export default Tofollow;
