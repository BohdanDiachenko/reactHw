import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../svgIcons/HomeIcon";
import UsersIcon from "../../svgIcons/UsersIcon";
import AboutIcon from "../../svgIcons/AboutIcon";

import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    return (
        <>
            <nav className="navigation">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <HomeIcon />
                    Home
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <UsersIcon />
                    Users
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <AboutIcon />
                    About
                </NavLink>
            </nav>
        </>
    );
};

export default Sidebar;
