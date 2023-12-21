import React from "react";


function NaviBar() {
    return<>
            <div className="App-NaviBar-crumbs">
            <h3 ><img src="../images/st-pauls-cathedral.jpeg" className="App-logo" alt="logo" /> LOGO</h3>
                <ul>
                        {/* hamburger & links */}
                        <li className="crumb"><a href="/">Contact</a></li>
                        <li className="crumb"><a href="/">About us</a></li>
                        <li className="crumb"><a href="/">Projects</a></li>
                </ul> 
                <button className="make-contact-btn"                         >Get in Touch</button>
            </div>
          </>
    }

export default NaviBar;