import React from 'react'
import Headerbar from '../../components/top/Headerbar.js';
import Leftbar from '../../components/left/Leftbar.js'
import Rightbar from '../../components/right/Rightbar.js'
import Feed from '../../components/feed/Feed.js'

function Home() {
  return (
    <>
    <Headerbar />
    <div className="homeContainer">
    <Leftbar />
    <Feed />
    <Rightbar />
    </div>
    </>
  )
}

export default Home;
