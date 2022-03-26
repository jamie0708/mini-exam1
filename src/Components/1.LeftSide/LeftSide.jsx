import React from 'react';
import '../../App.scss'
import './LeftSide.scss'
import logo from '../../Assets/Images/twitter-logo.png'
import home from '../../Assets/Images/Vector.png'
import sharp from '../../Assets/Images/Vector (1).png'
import bell from '../../Assets/Images/Vector (2).png'
import message from '../../Assets/Images/Vector (3).png'
import bookmark from '../../Assets/Images/Vector (4).png'
import list from '../../Assets/Images/lists.png'
import profile from '../../Assets/Images/Vector (5).png'
import more from '../../Assets/Images/Vector (6).png'

function LeftSide() {
    return(
        <div className='sidebar'>
            <div className='logoBox'>
                <img className='logoImg' src={logo} alt="logoImg" />
            </div>
            <ul className="menu">
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={home} alt="home_icon" /> languages.{}</a>
                </li>
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={sharp} alt="home_icon" /> Explore</a>
                </li>
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={bell} alt="home_icon" /> Notifications</a>
                </li>
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={message} alt="home_icon" /> Messages</a>
                </li>
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={bookmark} alt="home_icon" /> Bookmarks</a>
                </li>
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={list} alt="home_icon" /> Lists</a>
                </li>
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={profile} alt="home_icon" /> Profile</a>
                </li>
                <li className="menuItem">
                    <a href="#" className="menuLink"><img className='menuImg' src={more} alt="home_icon" /> More</a>
                </li>
            </ul>
        </div>
    );
}

export default LeftSide;