import { proposalSyntaxPlugins } from "@babel/preset-env/lib/shipped-proposals";


function Navbar() {
    
    return (
        <nav className='nav'>
            <a href="/finalproject" className="site-title">
                    Natalie's Photos
                    </a>
            <div>
                <ul>
                    <li>
                        <a href="/home">Home</a>    
                    </li>
                    <li>
                        <a href="/about">About</a>  
                    </li>
                    <li>
                        <a href="/flowers">Flowers</a>  
                    </li>
                    <li>
                        <a href="/contact">Contact Info</a>
                    </li>
                </ul>

            </div>
        <div>
            <div className="container">
                
                
            </div>
        </div>
        </nav>
    )
}
function CustomLink({href, children,  ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : "" }>
            <a href={href} {...props}>
                {children}
        </li>
    )
}

export default Navbar;