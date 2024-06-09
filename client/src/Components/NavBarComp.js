import React, { useState } from 'react'
import '../Styles/Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from '@mui/material';
import UserLogin from './UserLogin';

function NavBarComp() {
    const [isOpen, setIsOpen] = useState(false);
    const [handelOpen, setHandleOpen] = useState(false);

    function userLogin() {
        setHandleOpen(true);
    }

    return (
        <div className="Navbar">
            <div>
                <span className="nav-logo"><a style={{ textDecoration: 'none', color: '#C40C0C' }} href='/'>Mebius</a></span>
            </div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/shopstore">Shop</a>
                <a href="/adminmanagement">Admin Management</a>
            </div>
            <div className='navBarIcons' >
                <IconButton>
                    <ShoppingCartIcon sx={{ color: 'black' }} />
                </IconButton>&nbsp;&nbsp;
                <IconButton>
                    <FavoriteIcon sx={{ color: 'black' }} />
                </IconButton>&nbsp;&nbsp;
                <IconButton onClick={() => userLogin()}>
                    <LoginIcon sx={{ color: 'black' }} />
                </IconButton>&nbsp;&nbsp;
                <IconButton>
                    <LogoutIcon sx={{ color: 'black' }} />
                </IconButton>&nbsp;&nbsp;
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>

            {/* Login Component */}
            <UserLogin
                setHandleOpen={setHandleOpen}
                handelOpen={handelOpen}
            />
        </div>
    );
}

export default NavBarComp