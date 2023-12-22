import React from "react";


function NaviBar() {
    return<>
            <nav className="App-NaviBar-crumbs">
                <ul>
                        {/* hamburger & links */}
                        <li className="crumb"><a href="/">Contact</a></li>
                        <li className="crumb"><a href="/">About us</a></li>
                        <li className="crumb"><a href="/">Projects</a></li>
                        <button className="make-contact-btn">Get in Touch</button>
                </ul> 
            </nav>
          </>
    }

export default NaviBar;