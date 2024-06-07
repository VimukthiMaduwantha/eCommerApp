import React, { useState } from 'react'
import '../Styles/Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBarComp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Navbar">
            <div>
                <span className="nav-logo">Mebius</span>
            </div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/shopstore">Shop</a>
            </div>
            <div className='navBarIcons' >
                <ShoppingCartIcon />&nbsp;&nbsp;
                <FavoriteIcon />&nbsp;&nbsp;
                <LogoutIcon />&nbsp;&nbsp;
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
}

export default NavBarComp