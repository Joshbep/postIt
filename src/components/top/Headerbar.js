import React from 'react'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import "./Headerbar.css"

function Headerbar() {
  return (
    <div className="headerBar">
      <div className="headerLeft">
        <span className="appName">Post It</span>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
          <Search />
          <input placeholder="Search For Friends or posts" className="search"/>
        </div>
      </div>
      <div className="headeRight">
        <div className="headerBarLinks">
          <span className="headerBarLink">Homepage</span>
          <span className="headerBarLink">TimeLine</span>
        </div>
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
        <img className="headerImg"/>
      </div>
    </div>
  );
}

export default Headerbar;
