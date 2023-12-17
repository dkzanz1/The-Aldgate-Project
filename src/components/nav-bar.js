import React from "react";


function NaviBar() {
    return<>
            <div className="App-NaviBar">
                <ul>
                        {/* hamburger & links */}
                        <li className="App-NaviBar"><a href="/">Contact</a></li>
                        <li className="App-NaviBar"><a href="/">About us</a></li>
                        <li className="App-NaviBar"><a href="/">Projects</a></li>
                </ul> 
            </div>
          </>
    }

export default NaviBar;