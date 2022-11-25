import './leftBar.css';
import {
  Home,
  Search,
  Notifications,
  Mail,
  Bookmark,
  Person,
  MoreHoriz,
} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import React, { useContext, useState, useEffect } from 'react'


function Leftbar() {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="left">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="appName">Post It</span>
      </Link>
      <div className="leftWrapper">
          <div className="listItem">
            <Home className="icon"/>
            <span className="listItemText">Feed</span>
          </div>
          <div className="listItem">
            <Search className="icon"/>
            <span className="listItemText">Search</span>
          </div>
          <div className="listItem">
            <Notifications className="icon"/>
            <span className="barIconCounter">1</span>
            <span className="listItemText">Notifications</span>
          </div>
          <div className="listItem">
            <Mail className="icon"/>
            <span className="barIconCounter">1</span>
            <span className="listItemText">Messages</span>
          </div>
          <div className="listItem">
            <Bookmark className="icon"/>
            <span className="listItemText">Bookmarks</span>
          </div>
          <div className="listItem">
            <Person className="icon"/>
            <span className="listItemText">Profile</span>
          </div>
          <div className="listItem">
            <MoreHoriz className="icon"/>
            <span className="listItemText">More</span>
          </div>
          <div className="searchBar">
            <Search className="searchIcon"/>
            <input placeholder="Search Post It" className="search"/>
          </div>
        <button className="leftButton"> Post It</button>
      </div>
      <Link to={`/profile/${user.username}`}>
        <img
          className="headerImg"
          alt=""
          src={user.profilePicture ? PF + user.profilePicture : PF + "profile/avatar.png"}
        />
      </Link>
    </div>
  );
}

export default Leftbar;
