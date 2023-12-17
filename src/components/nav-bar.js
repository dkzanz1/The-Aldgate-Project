import React from "react";


function NaviBar() {
    return<>
            <div className="App-NaviBar-crumbs">
                <ul>
                        {/* hamburger & links */}
                        <li className="crumb"><a href="/">Contact</a></li>
                        <li className="crumb"><a href="/">About us</a></li>
                        <li className="crumb"><a href="/">Projects</a></li>
                </ul> 
            </div>
          </>
    }

export default NaviBar;