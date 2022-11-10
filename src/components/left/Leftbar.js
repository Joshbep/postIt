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
      <div className="wrapper">
        <ul className="list">
          <li className="listItem">
            <Home className="icon"/>
            <span className="listItemText">Feed</span>
          </li>
          <li className="listItem">
            <Search className="icon"/>
            <span className="listItemText">Search</span>
          </li>
          <li className="listItem">
            <Notifications className="icon"/>
            <span className="listItemText">Notifications</span>
          </li>
          <li className="listItem">
            <Mail className="icon"/>
            <span className="listItemText">Messages</span>
          </li>
          <li className="listItem">
            <Bookmark className="icon"/>
            <span className="listItemText">Bookmarks</span>
          </li>
          <li className="listItem">
            <Person className="icon"/>
            <span className="listItemText">Profile</span>
          </li>
          <li className="listItem">
            <MoreHoriz className="icon"/>
            <span className="listItemText">More</span>
          </li>
        </ul>
        <button className="leftButton"> Tweet</button>
      </div>
    </div>
  );
}

export default Leftbar;
