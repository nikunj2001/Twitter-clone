import React from 'react'
import {FaClipboardList, FaHashtag, FaHome, FaMehBlank, FaRegBell, FaRegBookmark, FaRegEnvelope, FaTwitter, FaUserAlt} from 'react-icons/fa'
const SideBar = () => {
    return (
        <div className='sideBar'>
            <ul>
                <li><a href=""><FaTwitter className='icons logo' /></a></li>
                <li><a href=""><FaHome className='icons logo' /> <span className='logo' >Home</span></a></li>
                <li><a href=""><FaHashtag className='icons' />Explore</a></li>
                <li><a href=""><FaRegBell className='icons' />Notifications</a></li>
                <li><a href=""><FaRegEnvelope className='icons' />Messages</a></li>
                <li><a href=""><FaRegBookmark className='icons' />BookMarks</a></li>
                <li><a href=""><FaClipboardList className='icons' />Lists</a></li>
                <li><a href=""><FaUserAlt className='icons' />Profile</a></li>
                <li><a href=""><FaMehBlank className='icons' />More</a></li>
                <div className="sidBar__Btn">
                    <a href="">Profile</a>
                </div>
            </ul>
        </div>
    )
}

export default SideBar
