import React from 'react'
import Leftbar from '../../components/left/Leftbar.js'
import Rightbar from '../../components/right/Rightbar.js'
import Feed from '../../components/feed/Feed.js'
import './home.css'

function Home() {
  return (
    <>
    <div className="homeContainer">
      <div>
        <Leftbar />
      </div>
      <Feed />
      <div className="right">
        <Rightbar />
      </div>
    </div>
    </>
  )
}

export default Home;
