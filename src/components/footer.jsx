import React from "react";
import "../App.css";




function Footer() {
    return<>
      <div className="App-Media-crumbs">
        <ul>
                <li className="crumb"><a href="/">Twitter</a></li>
                <li className="crumb"><a href="/">Facebook</a></li>
                <li className="crumb"><a href="/">Tinder</a></li>
        </ul>
        <div>
            <h3>Copycat 2023</h3>
            <h4>Call us direct <a href="tel:+44 123-456-789">123-456-789</a></h4>
            {/* <h4>email us on <a href="mailto: [a.person@somewhere.co.uk]?su" alt="email"></a></h4> */}
        </div>
       </div>
         </>
    }
export default Footer;