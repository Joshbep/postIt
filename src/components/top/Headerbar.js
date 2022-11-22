import React, { useContext, useState, useEffect } from 'react'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import "./Headerbar.css"
import {Link} from 'react-router-dom'
import axios from "axios";

function Headerbar() {

  return (
    <div className="headerBar">
      <div className="headerLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="appName">Post It</span>
        </Link>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="Search Post It" className="search"/>
        </div>
      </div>
      <div className="headerRight">
        <div className="headerBarIcons">
          <div className="barIcon">
            <Person />
            <span className="barIconCounter">1</span>
          </div>
        </div>
        <div className="headerBarIcons">
          <div className="barIcon">
            <Chat />
            <span className="barIconCounter">1</span>
          </div>
        </div>
        <div className="headerBarIcons">
          <div className="barIcon">
            <Notifications />
            <span className="barIconCounter">1</span>
          </div>
        </div>
        <img className="headerImg" alt="" src=""/>
      </div>
    </div>
  );
}

export default Headerbar;
