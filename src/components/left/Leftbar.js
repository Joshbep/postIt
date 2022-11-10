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
import React from 'react'


function Leftbar() {
  return (
    <div className="left">
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
            <span className="listItemText">Notifications</span>
          </div>
          <div className="listItem">
            <Mail className="icon"/>
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
        <button className="leftButton"> Post It</button>
      </div>
    </div>
  );
}

export default Leftbar;
