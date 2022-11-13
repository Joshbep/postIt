import React from 'react'
import Headerbar from '../../components/top/Headerbar.js';
import Leftbar from '../../components/left/Leftbar.js'
import Rightbar from '../../components/right/Rightbar.js'
import Feed from '../../components/feed/Feed.js'
import "./profile.css"


function Profile() {
  return (
    <>
    <Headerbar />
    <div className="profile">
      <Leftbar />
      <div className="profileCenter">
        <div className="profileCenterTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="" alt=""/>
            <img className="profileUserImg" src="" alt=""/>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Josh Pasour</h4>
            <span className="profileInfoDescription">Software Engineer</span>
          </div>
          <span className="joined">Joined in 2020</span>
          <div className="profileFollowingInfo">
            <span className="profileFollowing"><strong>221</strong> Following</span>
            <span className="profileFollowers"><strong>221</strong> followers</span>
          </div>
        </div>
        <div className="profileCenterBottom">
          <Feed />
        </div>
      </div>
      <Rightbar profile/>
    </div>
    </>
  )
}

export default Profile;
