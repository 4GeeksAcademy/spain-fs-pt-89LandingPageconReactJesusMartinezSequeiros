import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;