import {Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';

function Navbar() {
    
    return (
        
        <nav className='nav'>
                {/* <br></br> */}
                {/* <Link to='/finalproject' className="site-title"> */}
                    Natalie's Photography
                {/* </Link> */}
            {/* <CustomLink href="/finalproject/src/pages/NataliesPics.js"></CustomLink> */}
            <ul>
                <CustomLink to="/finalproject/src/pages/Home.js">Home</CustomLink>
            </ul>
            <ul>
                <CustomLink to="/finalproject/src/pages/Flowers.js">Flowers</CustomLink>
            </ul>
                <br></br>
            <ul>
                <CustomLink to="/finalproject/src/pages/About.js">About</CustomLink>
            </ul>
            <ul>
                <CustomLink to="/finalproject/src/pages/ContactPages/UserContactForm.js">Contact Me</CustomLink>
            </ul>

            <ul>
            <CustomLink to='/finalproject/src/SignInSide.js'>Sign On</CustomLink>
            </ul>
            
        </nav>
    )
}

function CustomLink({to, children,  ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;