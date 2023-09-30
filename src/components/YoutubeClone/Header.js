import React, { useState } from 'react'
import "./Assets/Header.scss"
import { Apps, Menu, Notifications, Search, VideoCall } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
function Header() {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <div className='header'>
      <div className="header_left">
      <Menu />
      <Link to="/tube">
      <img className='header_logo' src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" />
      </Link>
      </div>
      <div className="header__input">
      <input onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='search' />
      <Link to={`/search/${inputSearch}`}>
      <Search className='header__inputButton' />
      </Link>
      </div>
      <div className="header_icons">
      <VideoCall className='header_icon' />
      <Apps  className='header_icon'/>
      <Notifications  className='header_icon'/>
      <Avatar  className='header_icon'/>
      </div>
    </div>
  )
}

export default Header