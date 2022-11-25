import React, { useContext, useState, useEffect } from 'react'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import "./Headerbar.css"
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Headerbar() {
  const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="headerBar">
      <div className="headerCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="Search Post It" className="search"/>
        </div>
      </div>
    </div>
  );
}

export default Headerbar;
