import React from "react";
import "./header.scss";

const MainHeader = () => {
    return(
        <header className="header">
            <div className="logo">
                <span>Logo</span>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                     {/*    <span>Browse All Venu</span> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;