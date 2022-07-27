// import './'

function Navbar() {
    return (
        <nav className='naviagtion-icon'>
            {/* <button className="flowers">
                <svg 
                    // style="color: rgb(121, 23, 186)"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" height="16" fill="currentColor" 
                    class="bi bi-flower1" 
                    viewBox="0 0 16 16">
                    </svg>
            </button> */}
            <div className="navigation-menu">
                <ul>
                    <li>
                        <a href="/home">Home</a>    
                    </li>
                    <li>
                        <a href="/about">About</a>  
                    </li>
                    <li>
                        <a href="/Flowers">Flowers</a>  
                    </li>
                    <li>
                        <a href="/contact">Contact Me</a>
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

export default Navbar;