import React from 'react'
import "./Assets/Sidebar.scss"
import SideNav from './SideNav';
import { Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbDownAltOutlined, ExpandMoreOutlined } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
    <SideNav selected Icon={Home} title="Home" />
    <SideNav Icon={Whatshot} title="Trading" />
    <SideNav Icon={Subscriptions} title="Subscription" />
    <hr />
    <SideNav Icon={VideoLibrary} title="Library" />
    <SideNav Icon={History} title="History" />
    <SideNav Icon={OndemandVideo} title="Your history" />
    <SideNav Icon={WatchLater} title="Watch Later" />
    <SideNav Icon={ThumbDownAltOutlined} title="Liked videos" />
    <SideNav Icon={ExpandMoreOutlined} title="Show More" />
    <hr />
    </div>
  )
}

export default Sidebar