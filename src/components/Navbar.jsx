import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/rules"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Rules
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/play"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Play
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
