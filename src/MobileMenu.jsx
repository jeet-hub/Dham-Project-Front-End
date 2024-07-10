import React from 'react'
import './MobileMenu.css';
import { MdHome, MdHotel, MdSearch, MdHelp } from "react-icons/md";


const MobileMenu = () => {
    return (
        <>
            <div class="mobile-menu">
                <div className="menus">
                    <div className="menu-box card">
                        <div className='menu-icon'>
                            <MdHome />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="menu-box card">
                        <div className='menu-icon'>
                            <MdHotel />
                            <p>Hotels</p>
                        </div>
                    </div>
                    <div className="menu-box card">
                        <div className='menu-icon'>
                            <MdSearch />
                            <p>Search</p>
                        </div>
                    </div>
                    <div className="menu-box card">
                        <div className='menu-icon'>
                            <MdHelp />
                            <p>Need Helps</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
