import React from 'react'
import './Navbar.css'
import menu_icon from '../../Assets/menu.png'
import logo from '../../Assets/logo.png'
import search from '../../Assets/search.png'
import upload_icon from '../../Assets/upload.png'
import more_icon from '../../Assets/more.png'
import notification_icon from '../../Assets/notification.png'
import profile_icon from '../../Assets/jack.png'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu_icon' onClick ={()=>setSidebar(prev=>prev===false?true:false)}  src={menu_icon} alt=" " />
            <img className='logo' src={logo} alt="logo" />
        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search'/>
                <img src={search} alt="search" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt="upload_icon" />
            <img src={more_icon } alt="more_icon " />
            <img src={notification_icon} alt="notification_icon" />
            <img src={profile_icon} className='user-icon' alt="profile_icon" />
        </div>
    </nav>
  )
}

export default Navbar