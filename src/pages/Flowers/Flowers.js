import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import PhotoUploader from "./PhotoUpLoader";


function Flowers() {
    
    return (
        <>
        <div className="flowers">
        {/* <ul>
                <CustomLink to="/finalproject/src/pages/Home.js">Home</CustomLink>
            </ul> */}
        <div className="flower-one">
            <h1>
                <CustomLink to="/finalproject/src/pages/Flowers/Photos/Hostaflowers.jpg">
                    Purple Pop Flowers
                </CustomLink>
            </h1>
            </div>
        <div className="flower-two">
            </div>
        <div className="flower-three">
            </div>
        <div className="flower-four">
            </div>
        <div className="flower-five">
            </div>
        <div className="flower-six">
            </div>
        <div className="flower-seven">
            </div>
        <div className="flower-eight">
            </div>
        </div>
        </>
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

export default Flowers;
