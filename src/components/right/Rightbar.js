import './rightBar.css';
import React from 'react'
import {Users} from "../../data.js"
import Tofollow from '../toFollow/Tofollow.js'


function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="right">
      <div className="rightWrapper">
        <h4>Who You Should Follow</h4>
        <ul className="rightBarToFollow">
          {Users.map(u=>(
            <Tofollow  key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
