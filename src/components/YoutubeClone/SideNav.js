import React from 'react'
import "./Assets/SideNav.scss"
function SideNav({ selected, Icon, title }) {
  return (
    <div className={`sidenav ${selected && "selected"}`}>
       <Icon className="sidenav__icon"/>
        <h2 className='sidenav__title'>{title}</h2>
    </div>
  )
}

export default SideNav