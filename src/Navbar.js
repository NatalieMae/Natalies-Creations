import {Link, useMatch, } from 'react-router-dom';

function Navbar() {
    
    return (
        <nav className='nav'>
            <a href="/finalproject" className="site-title">
                    Natalie's Photos
            </a>
            <ul>
            {/* <CustomLink href="/finalproject/src/pages/NataliesPics.js"></CustomLink> */}
                <CustomLink href="/finalproject/src/pages/Home.js">Home</CustomLink>
                <CustomLink href="/finalproject/src/pages/Flowers.js">Flowers</CustomLink>
                <CustomLink href="/finalproject/src/pages/About.js">About</CustomLink>
                <CustomLink href="/finalproject/src/pages/Contact.js">Contact Information</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({href, children,  ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : "" }>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}

export default Navbar;