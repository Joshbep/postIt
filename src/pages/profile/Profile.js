import React, { useState, useEffect } from 'react'
import Leftbar from '../../components/left/Leftbar.js'
import Rightbar from '../../components/right/Rightbar.js'
import Feed from '../../components/feed/Feed.js'
import axios from "axios";
import {format} from "timeago.js"
import { useParams } from "react-router";
import "./profile.css"


function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const getUsers = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data)
    }
    getUsers();
  }, [username])

  return (
    <>
    <div className="profile">
      <Leftbar />
      <div className="profileCenter">
        <div className="profileCenterTop">
          <div className="profileCover">

            <img
            className="profileCoverImg"
            src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "post/world.png"
                }
            alt=""
            />

            <img
            className="profileUserImg"
            src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "profile/avatar.png"
                }
            alt=""/>

          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDescription">{user.description}</span>
          </div>
          <span className="joined">{format(user.createdAt)}</span>
        </div>
        <div className="profileCenterBottom">
          <Feed username={username} />
        </div>
      </div>
      <Rightbar user={user}/>
    </div>
    </>
  )
}

export default Profile;
