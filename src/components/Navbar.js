import React from "react";


function NavBar() {
    return<>
            <nav className="App-NaviBar-crumbs">
                <ul className="nav nav-pills">
                        {/* hamburger & links */}
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Contact</a></li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">About us</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/" alt="">Action</a></li>
                                <li><a className="dropdown-item" href="/" alt="">Next Action</a></li> 
                                <li><a className="dropdown-item" href="/" alt="">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/" alt="">Separate link</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Projects</a>
                        </li>
                        <button className="make-contact-btn">Get in Touch</button>
                </ul> 
            </nav>
          </>
    }

export default NavBar;